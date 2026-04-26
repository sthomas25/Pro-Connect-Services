import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("PORT environment variable is required");
}

app.get("/api/chat", (req, res) => {
  res.json({
    message: "ProConnect AI chat endpoint is ready",
    version: "1.0"
  });
});

app.get("/api/leads", (req, res) => {
  res.json({
    leads: [],
    message: "Leads endpoint is active"
  });
});

app.get("/api/bookings", (req, res) => {
  res.json({
    bookings: [],
    message: "Bookings endpoint is active"
  });
});

app.listen(PORT, () => {
  console.log("ProConnect AI running on port", PORT);
});
