
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

// JSON Response Method 

let jsonResponse = [
    {
        name: "Nayan",
        city: "Faridpur",
        age: 22,
        occupatio: "Web Developer"
    },
    {
        name: "Omor",
        city: "Faridpur",
        age: 23,
        occupatio: "Police"
    },
    {
        name: "Anamul",
        city: "Faridpur",
        age: 28,
        occupatio: "Buisnessman"
    },
    {
        name: "Rakibul",
        city: "Faridpur",
        age: 24,
        occupatio: "Job Holder"
    },

]

app.get("/five", (req, res) => {
    res.json(jsonResponse)
})

// Response Download file

app.get("/six", (req, res) => {
    res.download("./Download/be.jpg")
})



app.listen(port, () => {
    console.log("My Server is running successfully.")
})