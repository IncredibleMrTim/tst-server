import express, { Router } from "express";
import { db } from "../db.js";
import cors from "cors";
import {
    getSkills,
    addSkill,
    updateSkill,
    deleteSkill,
} from '../collections/skills.js'


const router = Router();


router.get("", async (req, res) => {
    try {
        const skills = await getSkills();
        res.send(skills);
    } catch (err) {
        console.error("Error fetching skills:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.post("/add", async (req, res) => {
    try {
        const skill = req.body;
        const result = await addSkill(skill);
        res.status(201).send(result);
    } catch (err) {
        console.error("Error adding skill:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const skill = req.body;
        const result = await updateSkill(id, skill);
        res.send(result);
    } catch (err) {
        console.error("Error updating skill:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteSkill(id);
        res.send(result);
    } catch (err) {
        console.error("Error deleting skill:", err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
});

export default router;

