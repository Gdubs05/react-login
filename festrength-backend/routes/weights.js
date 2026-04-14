import express from "express";

const router = express.Router();

const loggedWeights = []

// Return all weight entries
router.get("/", (req, res) => {
    res.json(loggedWeights);
})

// Receive new weight entry
router.post("/", (req, res) => {
    const newEntry = req.body;          //expects { weight, bodyfat, date }
    loggedWeights.push(newEntry);
    res.status(201).json(loggedWeights) //send back all entries
});

// Delete all weight entries
router.delete("/", (req, res) =>{
    loggedWeights.length = 0;
    res.json({message: "All logged weights cleared"});
})

export default router;