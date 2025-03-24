import { getDatabase, db } from "../db";
import { ObjectId } from "mongodb";

interface Experience {
  role: string;
  company: string;
  location: string;
  fromDate: Date;
  toDate: Date;
  description: string;
  skills: { order: number; name: string }[];
}

export async function getExperiences() {
  await db();
  const database = getDatabase();
  const experiences = await database
    .collection("experience")
    .find({})
    .toArray();
  return experiences;
}

export async function addExperience(experience: Experience) {
  const database = getDatabase();
  const result = await database.collection("experience").insertOne(experience);
  return result;
}

export async function updateExperience(
  id: string,
  experience: Partial<Experience>
) {
  const database = getDatabase();
  const result = await database
    .collection("experience")
    .updateOne({ _id: new ObjectId(id) }, { $set: experience });
  return result;
}

export async function deleteExperience(id: string) {
  const database = getDatabase();
  const result = await database
    .collection("experience")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
}
