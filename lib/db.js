import {MongoClient} from "mongodb";

export async function connectToDatabase(){
     return await MongoClient.connect("mongodb://mohammad:A3y0qIRkpryfZIbn@cluster0-shard-00-00.9h305.mongodb.net:27017,cluster0-shard-00-01.9h305.mongodb.net:27017,cluster0-shard-00-02.9h305.mongodb.net:27017/store?ssl=true&replicaSet=atlas-mx272i-shard-0&authSource=admin&retryWrites=true&w=majority")
     // return await MongoClient.connect("mongodb+srv://mohammad:A3y0qIRkpryfZIbn@cluster0.9h305.mongodb.net/store?retryWrites=true&w=majority")
}
