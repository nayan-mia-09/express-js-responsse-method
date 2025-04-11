
const express = require("express");
const app = express();
const port = 8080;

app.get("/home" ,(req, res) => {
    res.send("Hello This is MY SERVER");
});

app.listen(port, () => {
    console.log("My Server is running successfully.")
})