
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = [];


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",function(req,res){
    var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{
        kindofday:day,
        newlistitems: items
    })
})

app.post("/",function(req,res){
    var name = req.body.newitem;
    items.push(name);
    res.redirect("/");
})




app.listen(3000, function(){
  console.log("Server started on port 3000.");
});