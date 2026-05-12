import 'dotenv/config'
import express from "express"
import connectDb from "./config/DB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import notesRouter from "./routes/generateRoute.js";
import CreditRouter from "./routes/creditsRoutes.js";
import { stripeWebhook } from "./controllers/credits.controllers.js";
import itemRouter from "./routes/itemRoutes.js";
import marketplaceRouter from "./routes/MarketRoues.js";
import messageRouter from './routes/messageRoutes.js';
import interviewRouter from './routes/interviewRoute.js';
import corsMiddleware from "./config/cors.js";

const app = express();

// CORS FIRST
app.use(corsMiddleware);

// Stripe webhook
app.post(
  "/api/credits/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// Body parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("server is running...");
});

// Routes
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);
app.use("/api/credits", CreditRouter);
app.use("/api/item", itemRouter);
app.use("/api/marketplace", marketplaceRouter);
app.use("/api/message", messageRouter);
app.use("/api/interview", interviewRouter);

connectDb();

export default app;
