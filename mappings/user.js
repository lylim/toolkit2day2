// we used router to create mappings.
const express = require("express");

// exporting functions from data.js in root folder
const database = require("../data")

//initializing router
let router = express.Router();

// declaring API path (aka mapping)
router.get("/user/all", (request, response)=>{
    let users = database.get_all_users();

    response.status(200).send(users);
});

router.get("/user/by-id", (request, response)=>{
    if(!request.query.user_id){     //the term after query. is the key in key value pair
        console.log("Received invalid user id" + request.query.user_id);
        response.status(400).send("Received invalid user_id");
    } else {
        let users = database.get_user_by_user_id(request.query.user_id);
        response.status(200).send(users);
    }
});

// to add a new user to database
router.post("/user/add", (request, response)=>{
    let user = request.body;
    database.add_user(user);
    response.status(200).send("User added to the database!");
})

module.exports = {router};