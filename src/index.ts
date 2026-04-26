import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ----------------------
// ENV CHECK
// ----------------------
const PORT = Number(process.env.PORT || 3000);

// ----------------------
// HEALTH CHECK
// ----------------------
app.get("/", (req, res) => {
  res.json({
    status: "ProConnect AI Backend Running",
    version: "1.0"
  });
});

// ----------------------
// CHAT (GET - for testing)
// ----------------------
app.get("/api/chat", (req, res) => {
  res.json({
    message: "Chat endpoint is alive (GET)",
    note: "Use POST for real chat"
  });
});

// ----------------------
// CHAT (POST - FIXED)
// ----------------------
app.post("/api/chat", (req, res) => {
  const { message, userId } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  return res.json({
    reply: `ProConnect AI received: ${message}`,
    userId: userId || null,
    status: "working"
  });
});

// ----------------------
// LEADS (GET TEST)
// ----------------------
app.get("/api/leads", (req, res) => {
  res.json({
    leads: [],
    message: "Leads endpoint active"
  });
});

// ----------------------
// BOOKINGS (GET TEST)
// ----------------------
app.get("/api/bookings", (req, res) => {
  res.json({
    bookings: [],
    message: "Bookings endpoint active"
  });
});

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, "0.0.0.0", () => {
  console.log(`ProConnect AI running on port ${PORT}`);
});
