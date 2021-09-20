import nextConnect from 'next-connect';
import middleware from '../../service/middleware/database';
// import { getTreeItemUtilityClass } from '@mui/lab';

//const handler = nextConnect();

const collection = 'VaniUser';
// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': {
//             return res.json({message:"sss",success: true});
//         }

//         case 'POST': {
//             return getUser(req, res);
//         }

//         case 'PUT': {
//             return updatePost(req, res);
//         }

//         case 'DELETE': {
//             return deletePost(req, res);
//         }
//     }
// }

// async function getUser(req,res){
//     res.json({message:"sss",success: true});
// }

// // const handler = nextConnect();
//  handler.use(middleware);
// // handler.get(async (req, res) => {
// //     res.json({message: 'ok'})
// // });

// handler.post(async (req, res) => {
//     return res.json({message: 'ok'});
//     // try {
//     //     //let data = req.body
//     //     //data = JSON.parse(data);
//     //     //login

//     //     // let user = await req.db.collection(collection).find({userName:"admin",password:"admin"});//{user:data.user,password:data.password});
//     //     // if(!user){
//     //     //     res.status(200).json({code:true,message:'authen succes',reslut:user});
//     //     // }
//     //     //res.status(200).json({code:false, message: 'Auth Failed',reslut:data});
//     //     res.json({message: 'Auth Failed'})
//     // } catch (error) {
//     //     //res.status(401).json({code:false, message: 'Auth Failed',reslut:null});
//     //     res.json({message: 'Auth Failed'})
//     // }

// });

const handler = nextConnect()
    .use(middleware)
    .get((req, res) => {
        res.send('Hello world');
    })
    .post((req, res) => {
        let user = req.db.collection("VaniUser").find({});//.find({userName:"admin",password:"admin"});//{user:data.user,password:data.password});
        //if(!user){
            res.status(200).json({code:true,message:'authen succes',reslut:user});
        //}
        //res.status(401).json({code:false, message: 'Auth Failed',reslut:null});
    })

    export default handler;
//export default async (req, res) => handler.apply(req, res)