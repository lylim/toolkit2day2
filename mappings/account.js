// we used router to create mappings.
const express = require("express");

// exporting functions from data.js in root folder
const database = require("../data")

//initializing router
let router = express.Router();

// declaring API path (aka mapping)
router.get("/account/all", (request, response)=>{
    let accounts = database.get_all_accounts();

    response.status(200).send(accounts);
});

router.get("/account/by-account-id", (request, response)=>{
    let account = database.get_account_by_account_id(request.query.account_id);

    if (account){
        response.status(200).send(account);
    } else {
        response.status(404).send("account not found");
    }
});




module.exports = {router};