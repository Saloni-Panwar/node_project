const express = require("express");
const path = require("path")
const hbs = require("hbs");
const app = express();
require("./db/connection");
const user=require('./model/user_details');
const port = process.env.PORT || 5000;
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));  //Get the data fetched by setting the extend property false
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);
app.get("/", (req, resp) => {
    resp.render('index');
});
// app.get("/contact", (req, resp) => {
//     resp.render('contact');
// });
app.post("/contact",async(req,resp)=>{
    try {
        // resp.send(req.body);
        const userData=new user(req.body);
        await userData.save();
        resp.status(201).render("index");
    } catch (error) {
        resp.status(500).send(error);
    }
});
app.get("/maps", (req, resp) => {
    resp.render('maps');
});
app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});
