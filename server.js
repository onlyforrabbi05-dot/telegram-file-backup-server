import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import FormData from "form-data";

const upload = multer();
const app = express();

const BOT_import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import FormData from "form-data";

const app = express();
const upload = multer();

const BOT_TOKEN = process.env.BOT_TOKEN;  // Environment variable
const CHAT_ID = process.env.CHAT_ID;      // Environment variable

// Upload API
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const form = new FormData();
    form.append("chat_id", CHAT_ID);
    form.append("document", req.file.buffer, req.file.originalname);

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
      method: "POST",
      body: form
    });

    res.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "error", message: e.message });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Telegram File Uploader is Running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
TOKEN = process.env.BOT_TOKEN;  
const CHAT_ID = process.env.CHAT_ID;      

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const form = new FormData();
    form.append("chat_id", CHAT_ID);
    form.append("document", req.file.buffer, req.file.originalname);

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
      method: "POST",
      body: form
    });

    res.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "error" });
  }
});

app.get("/", (req, res) => {
  res.send("Telegram File Uploader Running!");
});

app.listen(3000, () => console.log("Running on 3000"));
