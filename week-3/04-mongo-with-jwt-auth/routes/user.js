const { Router } = require("express");
const router = Router();
const { User, Admin, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const data = await User.findOne({username:username,password:password});
    if(data)res.status(409).json({msg:"User aldready exists"});
    else{
        try{
            await User.create({username:username,password: password});
            res.send({ message: 'User created successfully' });

        }catch(err){
            res.status(500).json({message:"User not created"});
        }
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidated = await User.findOne({username:username,password:password});
    if(isValidated){
        const token = jwt.sign({username:username},JWT_SECRET);
        res.send({token});
    }else{
        res.status(411).json({message:"Incorrect email and password"});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.send({courses});
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username
    await User.updateOne({
        username:username
    },{
        $push: {
            purchasedCourses : courseId
        }
    })
    res.json({message: "Purchase Complete!"})
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await  User.findOne({username});
    const courses = await Course.find({
        _id :{
            '$in' : user.purchasedCourses
        }
    });
    res.json({coursesPurchased:courses})
});

module.exports = router