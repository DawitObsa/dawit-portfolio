import cors from "cors";
import express from "express";
import { env } from "./src/config/env.js";
import inquiryRoutes from "./src/routes/inquiry.routes.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api", inquiryRoutes);

app.listen(env.port, () => {
  console.log(`Backend running on http://localhost:${env.port}`);
});
