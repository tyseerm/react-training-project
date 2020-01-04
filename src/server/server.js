import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";

const port = 7777;
let app = express();

app.listen(port, console.log("server listening on port:", port));

app.use(cors(), bodyParser.urlencoded({extended:true}), bodyParser.json());

export const addNewSkill = async (skill) => {
    let db = await connectDB();
    let collection = db.collection("skills");
    await collection.insertOne(skill);
};

export const updateSkill = async (skill) => {
    let {id, owner, name, years} = skill;

    let db = await connectDB();
    let collection = db.collection("skills");

    if(name != undefined){
        await collection.updateOne({id}, {$set:{name}});
    }

    if(years != undefined){
        await collection.updateOne({id}, {$set:{years}});
    }

}

app.post("/skill/new", async(req, res) => {
    let skill = req.body.skill;
    await addNewSkill(skill);
    res.status(200).send();

});

app.post("/skill/update", async(req, res) => {
    let skill = req.body.skill;
    await updateSkill(skill);
    res.status(200).send();

});