import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import passport from "passport";
import { load } from "#config/passport.js";
import routes from "#routes/index.js";
import "#config/database.js";
import "#database/models/index.js";

const app = express();

load(passport);
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(routes);

export default app;
