import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient('mongodb://localhost:27017', { //
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let cachedClient = null;
let cachedDb = null;
async function database(req, res, next) {
  //if (!client.isConnected()) await client.connect();
  
  await client.connect();
  req.dbClient = client;
  req.db = client.db('manager_router');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;