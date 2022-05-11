import { ObjectId } from "mongodb";
import {connectToDatabase} from "./../../../../../lib/db"

export default async function handler(req,res){
    const {_id} = req.query;
    if(req.method==="POST"){
        const client=await connectToDatabase();
        const db=client.db();
        let data=JSON.parse(JSON.stringify(req.body));
        const filter = {_id:ObjectId(`${_id}`)};
        const options = { upsert: true };
        const updateDoc = {
        $push: {
            comments:{...data,date:new Date(),_id:ObjectId()}
        },
        };
        await db.collection("laptop").updateOne(filter, updateDoc, options);
        client.close();
        res.status(200).json({status:"sucsses",data:{message:"افزودن نظر به درستی انجام شد  با تشکر از نظر شما"}});
    }
}
