import { connectToDatabase } from "../../lib/db";

export default async function handler(req,res){
    const client=await connectToDatabase();
    const db=client.db();
    // let result=await db.collection("laptop").find({title:{[$in}}).toArray();
    console.log(result);
}   