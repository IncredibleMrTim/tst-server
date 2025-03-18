import express from "express";
import { db } from "../db";
import cors from "cors";
import {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../collections/experience";

db();
const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;

app.get("/experience", async (req, res) => {
  try {
    const experiences = await getExperiences();
    console.log("Experiences:", experiences); // Log the experiences to verify the data
    res.json(experiences);
  } catch (err: Error | any) {
    console.error("Error fetching experiences:", err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.post("/experience", async (req, res) => {
  try {
    const experience = req.body;
    const result = await addExperience(experience);
    res.status(201).json(result);
  } catch (err: Error | any) {
    console.error("Error adding experience:", err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.put("/experience/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const experience = req.body;
    const result = await updateExperience(id, experience);
    res.json(result);
  } catch (err: Error | any) {
    console.error("Error updating experience:", err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.delete("/experience/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteExperience(id);
    res.json(result);
  } catch (err: Error | any) {
    console.error("Error deleting experience:", err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
