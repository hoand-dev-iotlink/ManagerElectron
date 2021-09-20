import { connectDatabase } from "../../service/middleware/connectDatabase";

const colletion = 'VaniUser';
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
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
            .find({userName:data.user,password:data.password})
            //.sort({ published: -1 })
            .toArray();
            if(posts){
                return res.status(200).json({code:true,message:'authen succes',reslut:JSON.parse(JSON.stringify(posts))});
            }else return res.status(401).json({code:false, message: 'Auth Failed',reslut:null});
    } catch (error) {
        return res.status(401).json({
            code:false,
            message: new Error(error).message,
            reslut: null
        });
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