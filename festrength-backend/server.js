import express from "express";
import cors from "cors";

const app = express();   //the server object itself

app.use(cors());         //allows react app to talk to server
app.use(express.json()); //alloqs server to understand JSON

const PORT = 3001;       //define the port your server listens on

app.get("/", (req, res) => {                //req is the incoming request, res is what gets sent back
    res.send("FeStrength API is running");
});

app.listen(PORT, () => {                    //actually starts the server
    console.log(`Server running on port ${PORT}`);  //runs when the server is started
});