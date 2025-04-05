const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../config')
// Middleware for handling auth

// jwt saves us a db calll
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        const decodedval = jwt.verify(jwtToken,JWT_SECRET);
        if(decodedval.username){
            next();
        }else{
            res.status(403).json({msg:"Authentication Failed"})
        }
    }catch(err){
        res.status(404).json({error : "invalid authorization"});
    }
}

module.exports = adminMiddleware;