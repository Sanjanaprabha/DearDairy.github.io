
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/todolistdb")
const itemSchema ={
    Name:String
}
const Item = mongoose.model("Item",itemSchema)

app.get("/",function(req,res){
    Item.find({},function(err,foundItems){

        res.render("list",{
            kindofday:day,
            newlistitems: foundItems  
        })
    }) 
    var today = new Date(); 
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);
})

app.post("/",function(req,res){
    const itemName = req.body.newitem;
    const item = new Item({
        Name:itemName
    })
    item.save();
    res.redirect("/");
    
})




app.listen(3000, function(){
  console.log("Server started on port 3000.");
});