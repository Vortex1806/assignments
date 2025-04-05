const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken')
const { User, Admin } = require("../db");
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const data = await Admin.findOne({username:username,password:password});
    if(data)res.status(409).json({msg:"User aldready exists"});
    else{
        try{
            await Admin.create({username:username,password: password});
            res.send({ message: 'Admin created successfully' });

        }catch(err){
            res.status(500).json({message:"Admin not created"});
        }
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidated = await Admin.findOne({username:username,password:password});
    if(isValidated){
        const token = jwt.sign({username:username},JWT_SECRET);
        res.send({token});
    }else{
        res.status(411).json({message:"Incorrect email and password"});
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logicconst title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const data = await Course.create({
        title:title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.send({ message: 'Course created successfully', courseId: data._id })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})
    console.log(allCourses);
    res.send({courses:allCourses})
});

module.exports = router;