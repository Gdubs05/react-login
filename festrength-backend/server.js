import express from "express";
import cors from "cors";

const app = express();   //the server object itself
const PORT = 3001;       //define the port your server listens on
const loggedWeights = [];

app.use(cors());         //allows react app to talk to server
app.use(express.json()); //allows server to understand JSON

app.get("/", (req, res) => {                //req is the incoming request, res is what gets sent back
    res.send("FeStrength API is running");
});

// Return all weight entries
app.get("/weights", (req, res) => {
    res.json(loggedWeights);
})

// Receive new weight entry
app.post("/weights", (req, res) => {
    const newEntry = req.body;          //expects { weight, bodyfat, date }
    loggedWeights.push(newEntry);
    res.status(201).json(loggedWeights) //send back all entries
});

app.listen(PORT, () => {                    //actually starts the server
    console.log(`Server running on port ${PORT}`);  //runs when the server is started
});