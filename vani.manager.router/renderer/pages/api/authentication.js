import { connectDatabase } from "../../service/middleware/connectDatabase";
const jwt = require('jsonwebtoken');
const jwtSecret = 'VANI@2021';

const colletion = 'VaniUser';
const expiresIn = 86400;
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return checkToken(req, res);
        }

        case 'POST': {
            return getPosts(req, res);
            //return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

async function getPosts(req, res) {
    try {
        let data = req.body
        data = JSON.parse(data);
        let { db } = await connectDatabase();
        let posts = await db
            .collection(colletion)
            .find({ userName: data.user, password: data.password })
            //.sort({ published: -1 })
            .toArray();
        if (posts && posts != null) {
            let user = JSON.parse(JSON.stringify(posts));
            if (user.length > 0) {
                const token = jwt.sign(
                    { userId: user[0].userId, email: user[0].email, phone: user[0].phone },
                    jwtSecret,
                    {
                        expiresIn: expiresIn, //24 hours
                    },
                );
                return res.status(200).json({ code: true, message: 'Đăng nhập thành công', reslut: user, token: token });
            }
        }
        return res.status(200).json({ code: false, message: 'Nhập sai Số điện thoại hoặc tên đăng nhập hoặc mật khẩu', reslut: null });
    } catch (error) {
        return res.status(401).json({
            code: false,
            message: new Error(error).message,
            reslut: null
        });
    }
}

async function checkToken(req, res) {
    console.log(req);
    if (!('token' in req.cookies)) {
        res.status(401).json({ code: false, message: 'Chưa đăng nhập', reslut: null });
        //res.status(401).json({ message: 'Unable to auth' });
        return;
    }
    let decoded;
    const token = req.cookies.token;
    console.log(req.cookies.token);
    if (token) {
        try {
            decoded = jwt.verify(token, jwtSecret);
        } catch (e) {
            console.error(e);
        }
    }

    if (decoded) {
        res.json(decoded);
        return;
    } else {
        res.status(401).json({ code: false, message: 'Chưa đăng nhập', reslut: null });
    }
}

// Adding a new post
async function addPost(req, res) {
    try {
        let { db } = await connectDatabase();
        await db.collection('VaniUser').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Updating a post
async function updatePost(req, res) {
    try {
        let { db } = await connectDatabase();

        await db.collection('VaniUser').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// deleting a post
async function deletePost(req, res) {
    try {
        let { db } = await connectDatabase();

        await db.collection('VaniUser').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}