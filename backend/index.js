import express from "express"
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';  
import { getDataController } from "./controllers/getDataController.js";

dotenv.config();   

const app = express()
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const host = process.env.HOST
const frontendPath = path.join(__dirname, "..", "frontend", "out");

// app.use(cors()) 

// app.use(cors({ 
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));


app.use(cors({ 
  origin: 'https://weather.maxsivian.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json())

app.get('/logo.jpg', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(frontendPath, 'logo.jpg'));
});

app.use(express.static(frontendPath));


app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(frontendPath, 'about.html'));
});

app.get('/station', (req, res) => {
  res.sendFile(path.join(frontendPath, 'station.html'));
});

app.get('/:any(*)', (req, res) => {
  res.sendFile(path.join(frontendPath, '404.html'));
});


app.post('/getdata', getDataController)


app.listen(port,host,() => {
  console.log("\n===== LIVECAST WEATHER STATION =====");
  console.log("✅ Server is up and running!");
  console.log(`🌐 http://${host}:${port}`);
  console.log("\n");
});





// app.use('/images', express.static(path.join(frontendPath, 'images'), {
//   setHeaders: (res, path) => {
//     if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
//       res.setHeader('Content-Type', 'image/jpeg');
//       res.setHeader('Access-Control-Allow-Origin', '*');
//     }
//   }
// }));



// import express from "express"
// import cors from "cors"
// import path from "path";
// import { fileURLToPath } from "url";
// import dotenv from 'dotenv';  
// import { getDataController } from "./controllers/getDataController.js";

// import https from "https";
// import fs from "fs";

// dotenv.config();  

// const app = express()
// const port = 3001
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const host = process.env.HOST


// app.use(cors())
// app.use(express.json())
// const frontendPath = path.join(__dirname, "..", "frontend", "out");
// app.use(express.static(frontendPath));


// app.get('/test', (req, res)=>{
//   res.send("WEATHER")
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.join(frontendPath, 'index.html'));
// });

// app.post('/getdata', getDataController)

// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
// };

// https.createServer(httpsOptions, app).listen(port,host,() => {
//   console.log("\n===== LIVECAST WEATHER STATION =====");
//   console.log("✅ Server is up and running!");
//   console.log(`🌐 https://${host}:${port}`);
//   console.log("\n");
// });


