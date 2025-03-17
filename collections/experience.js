import { getDatabase, db } from '../db.js';

export async function getExperiences() {
    await db()
    const db = getDatabase();
    const experiences = await db.collection('experience').find({}).toArray();
    return experiences;
}

export async function addExperience(experience) {
    const db = getDatabase();
    const result = await db.collection('experience').insertOne(experience);
    return result;
}

export async function updateExperience(id, experience) {
    const db = getDatabase();
    const result = await db.collection('experience').updateOne({ _id: id }, { $set: experience });
    return result;
}

export async function deleteExperience(id) {
    const db = getDatabase();
    const result = await db.collection('experience').deleteOne({ _id: id });
    return result;
}