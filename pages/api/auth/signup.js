import {connectToDatabase} from "./../../../lib/db"
import {hashPassword} from "./../../../lib/auth";

export default async function handler(req,res){
    const {email,password}=req.body;
    const client=await connectToDatabase();
    const db=await client.db();
    const existUser=await db.collection("users").findOne({email});
    if(existUser){
        res.status(422).json({status:"fail",data:{message:"این نام کاربری از قبل ثبت نام شده است"}});
        client.close();
        return
    }
    if(!email.includes("@")||email.trim().length<11||password.trim().length<8){
        res.status(422).json({status:"fail",data:{message:"ایمیل باید معتبر باشد و پسورد باید حداقل دارای 8 کاراکتر داشته باشد"}});
        client.close();
        return  
    }
    const hashedPassword=await hashPassword(password);
    await db.collection('users').insertOne({
        email: email,
        password: hashedPassword,
    });
    res.status(201).json({status:"success",data:{message:"ثبت نام با موفقیت انجام شد"}})
    client.close();
}