import express from "express";
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.get("/", (req, res) => {
res.send("about")
})

app.get("/about", (req, res) => {
res.render("about", { title: "About Page hai lavde " , msg: "This is the about page of ejs project made by shrish"})
})

app.get("/form",(req, res)=>{
    res.render("form", {mesg : null})
})

app.post("/submit", (req, res)=>{
    const name= req.body.name

    const mesg ="hello " + name + " your form has been submitted successfully"
    res.render("form", {mesg : mesg})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
