import express from "express";
const app = express();
app.set("view engine", "ejs")

app.get("/", (req, res) => {
res.send("about")
})

app.get("/about", (req, res) => {
res.render("about page")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
