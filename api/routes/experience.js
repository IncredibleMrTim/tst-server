import { Router } from "express";

import {
    getExperiences,
    addExperience,
    updateExperience,
    deleteExperience,
} from "../collections/experience.js";


const router = Router();


router.get("", async (req, res) => {
    try {
        const experiences = await getExperiences();
        console.log("Experiences:", experiences); // Log the experiences to verify the data
        res.send(experiences);
    } catch (err) {
        console.error("Error fetching experiences:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.post("/add", async (req, res) => {
    try {
        const experience = req.body;
        const result = await addExperience(experience);
        res.status(201).send(result);
    } catch (err) {
        console.error("Error adding experience:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const experience = req.body;
        const result = await updateExperience(id, experience);
        res.send(result);
    } catch (err) {
        console.error("Error updating experience:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteExperience(id);
        res.send(result);
    } catch (err) {
        console.error("Error deleting experience:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

export default router;

