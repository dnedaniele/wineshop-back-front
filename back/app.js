const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Wine = require("./modules/Wine"); 
require("dotenv").config();

const app = express();

// MIDDLEWARES

app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ROUTES

app.get("/", (req, res) => {
  res.send("this is the homepage");
});

// POST create one Wine
app.post("/wines", async (req, res) => {
  const wine = new Wine ({
image: req.body.image,
typeName : req.body.typeName,
specName: req.body.specName,
price: req.body.price,
  });
  try {
    const savedWine = await wine.save();
    res.json(savedWine);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET the Full List of Wines

app.get("/wines-list", async (req, res)=>{
const wineList = await Wine.find({}).exec();
if (!wineList) throw Error("No Items");
    res.status(200).json(wineList);
}); 

// GET only one Wine selected by ID

app.get("/wines/:wineId", async (req,res)=>{
const wineId = req.params.wineId;
const wine = await Wine.findOne({_id: wineId});
if(!wine){
    res.status(404).end();
}else{
    res.json(wine);
}
});

// DELETE one Wine selected by ID

// PUT - Change the details of a Wine selected by Id

// Listen

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
