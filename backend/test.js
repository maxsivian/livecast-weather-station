import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { getDataController } from "./controllers/getDataController.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "..", "frontend", "out");

// ✅ CORS only for your frontend
app.use(
  cors({
    origin: "https://weather.maxsivian.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ Serve /logo.jpg with open CORS for social cards
app.get(
  "/logo.jpg",
  cors({ origin: "*" }), // override just for this route
  (req, res) => {
    res.sendFile(path.join(frontendPath, "logo.jpg"));
  }
);

// ✅ Serve static files
app.use(express.static(frontendPath));

// ✅ Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(frontendPath, "about.html"));
});

app.get("/station", (req, res) => {
  res.sendFile(path.join(frontendPath, "station.html"));
});

app.get("/:any(*)", (req, res) => {
  res.sendFile(path.join(frontendPath, "404.html"));
});

// ✅ API
app.post("/getdata", getDataController);

// ✅ Start server
app.listen(port, host, () => {
  console.log("\n===== LIVECAST WEATHER STATION =====");
  console.log("✅ Server is up and running!");
  console.log(`🌐 http://${host}:${port}\n`);
});
