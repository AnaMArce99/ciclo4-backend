import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";

import UserRoutes from "./routes/user.routes";
import OrderRoutes from "./routes/order.routes";

const app = express();

// Settings
app.set("port", PORT);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", OrderRoutes);
app.use("/api", UserRoutes);

export default app;