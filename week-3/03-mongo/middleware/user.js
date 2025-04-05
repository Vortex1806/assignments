const { response } = require("express");
const { User } = require("../db");
const e = require("express");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    if(!username || !password)return res.status(409).send({err:"username or password headers missing"});
    const data = await User.findOne({username:username,password:password});
    if(data)next()
    else{
        res.status(403).json({msg:"user does not exist"});
    }
}

module.exports = userMiddleware;