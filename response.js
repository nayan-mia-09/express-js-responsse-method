
const express = require("express");
const app = express();
const port = 8080;

app.get("/home" ,(req, res) => {
    res.send("Hello This is MY SERVER");
});


// Simple String Response 

app.get("/one", (req, res) => {
    res.send("Hello this is simple string response get method.")
})

app.post("/two", (req, res) => {
    res.send("Hello this is simple string response post method.")
})


app.put("/three", (req, res) => {
    res.send("Hello this is simple string response put method")
})


app.delete("/four", (req, res) => {
    res.send("Hello this is simple string response delete method")
})

// Response Status code 

app.get("/status", (req, res) => {
    res.status(401)
    res.end("Bad Error")
})




app.listen(port, () => {
    console.log("My Server is running successfully.")
})