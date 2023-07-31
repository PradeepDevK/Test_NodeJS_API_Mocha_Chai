"use strict";

// Load express module
const express = require('express'),
app = express(),
bodyParser = require("body-parser"),
faker = require('faker');
 
 
app.use(bodyParser.json());
 
//Define request response in root URL (/)
app.get('/', (req, res)=> {
    res.send('App running successfully!');
})
 
// Create a basic get API with some response...
app.get('/post-list', (req,res)=>{
    if(!req.query.user_id || req.query.user_id==""){
        res.status(401).send({"message":"User Id parameter is missing"})
    }
    else{
        res.json({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        });
    }
});
 
// Dummy post API with some input params and response.
app.post('/submit-data', (req,res)=>{
    if(!req.body.name || !req.body.email){
        res.status(401).json({
            message : "Mandatory params are missing!"
        });
    } else {
        res.status(200).json({
            message : "data saved successfully"
        });
    }
});
 
//Launch listening server on port 8080
app.listen(4000, ()=> {
    console.log('App listening on port 4000!')
});
 
module.exports = app;