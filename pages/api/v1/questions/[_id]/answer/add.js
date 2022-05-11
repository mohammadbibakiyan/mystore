import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../../../lib/db";

export default async function handler(req,res){
    if(req.method==="POST"){
        const {_id}=req.query;
        console.log(_id);
        const client=await connectToDatabase();
        const db=client.db();
        const filter = {questions:{$elemMatch:{_id:ObjectId(_id)}}};
        const options = { upsert: true };
        const updateDoc = {
        $push: {
            "questions.$.answers":{answer:JSON.parse(req.body),_id:ObjectId()}
        },
        };
        const m=await db.collection("laptop").updateOne(filter, updateDoc, options);
        res.status(200).json({status:"sucsses",message:"پاسخ شما با موفقیت ثبت شد"})
    }
}
