const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors"); 
require("dotenv").config();

const app = express(); 

// MIDDLEWARES

app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true  
})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ROUTES

app.get('/',(req, res)=>{
  res.send("this is the homepage")
});

// Listen

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server run at port ${PORT}`));