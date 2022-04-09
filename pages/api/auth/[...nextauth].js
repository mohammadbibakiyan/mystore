import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
        session:{
            jwt:true
        },
        providers:[
            CredentialsProvider({
                async authorize(credentials){
                    const client = await connectToDatabase();
                    const usersCollection = client.db().collection('users');
                    const user = await usersCollection.findOne({email: credentials.email,});
                    if(!user){client.close();throw new Error("نام کاربری یا رمز عبور اشتباه وارد شده است")};
                    const isValid = await verifyPassword(credentials.password,user.password);
                    if (!isValid) {client.close();throw new Error("نام کاربری یا رمز عبور اشتباه وارد شده است");}
                    client.close();
                    return { email: user.email };
                }
            })
        ]
    }
);