import uuid from "uuid";
import md5 from "md5";

import {connectDB} from "./connect-db";

const authenticationTokens = [];

async function assembleUserState(user){
    let db = await connectDB();
    let engineers = await db.collection("engineers").find().toArray();
    let skills = await db.collection("skills").find().toArray();
    let users = await db.collection("users").find().toArray();
    return {
        engineers,
        skills,
        users,
        session: {authenticated: "AUTHENTICATED", id: user.id} 
    }
}

export const authenticationRoute = app => {
    app.post("/authenticate", async(req, res)=>{
        let {username, password} = req.body;
        let db = await connectDB();
        let collection = db.collection("users");

        let user = await collection.findOne({name: username});

        if(!user){
            return res.status(500).send("user not found");
        }

        let hash = md5(password);

        let passwordCorrect = hash === user.passwordHash;
        if(!passwordCorrect){
            return res.status(500).send("password incorrect");
        }

        let token = uuid();
        authenticationTokens.push({token,userId: user.id});
        let state = await assembleUserState(user);
        res.status(200).send({token, state});
    });
};