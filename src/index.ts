import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

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
app.post("/api/chat", async (req, res) => {
  const { message, userId } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500
    });

    const aiReply = response.choices[0]?.message?.content || "No response generated";

    return res.json({
      reply: aiReply,
      userId: userId || null,
      status: "success"
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return res.status(500).json({
      error: "Failed to generate response",
      status: "error"
    });
  }
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
