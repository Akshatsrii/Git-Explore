import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import trendingRoutes from "./routes/trendingRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/trending", trendingRoutes);

app.use(errorMiddleware);

export default app;