import { connectToDatabase } from "../../../../../../lib/db";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
    const {_id}=req.query;
    if(req.method==="POST"){
        const client=await connectToDatabase();
        const db=client.db();
        let data=JSON.parse(JSON.stringify(req.body));
        const filter = {_id:ObjectId(`${_id}`)};
        const options = { upsert: true };
        const updateDoc = {
        $push: {
            questions:{...data,date:new Date(),_id:ObjectId()}
        },
        };
        await db.collection("laptop").updateOne(filter, updateDoc, options);
        client.close();
        res.status(200).json({status:"sucsses",data:{message:"افزودن سوال شما با موفقت انجام شد"}});
    }
}