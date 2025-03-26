import { getDatabase, db } from "../db.js";
import { ObjectId } from "mongodb";

export async function getSkills() {
    await db();
    const database = getDatabase();
    const experiences = await database
        .collection("skills")
        .find({})
        .toArray();
    return experiences;
}

export async function addSkill(skill) {
    const database = getDatabase();
    const result = await database.collection("skills").insertOne(experience);
    return result;
}

export async function updateSkill(id, skill) {
    const database = getDatabase();
    const result = await database
        .collection("skills")
        .updateOne({ _id: new ObjectId(id) }, { $set: experience });
    return result;
}

export async function deleteSkill(id) {
    const database = getDatabase();
    const result = await database
        .collection("skills")
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}