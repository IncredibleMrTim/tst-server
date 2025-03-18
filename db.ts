import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string; // Use the MONGO_URI environment variable
const client = new MongoClient(uri);

let database: Db;

export async function db(): Promise<void> {
  try {
    await client.connect();
    database = client.db("tst"); // Ensure the correct database name is used
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

export function getDatabase(): Db {
  if (!database) {
    throw new Error("Database not initialized. Call db() first.");
  }
  return database;
}
