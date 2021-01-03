const express = require('express');
const mongoose = require('mongoose'); 

const app = express(); 

// ROUTES

app.get('/',(req, res)=>{
  res.send("this is the homepage")
});

app.listen(3000)