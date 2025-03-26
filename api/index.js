import express from "express";
import { db } from "./db.js";
import cors from "cors";
import experienceRouter from "./routes/experience.js";
import skillsRouter from "./routes/skills.js";
import compression from "compression";
import bodyParser from "body-parser";

db();
const app = express();
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;

app.use('/experience', experienceRouter);
app.use('/skills', skillsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});