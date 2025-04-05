// ### Admin Routes:
// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }
// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }
// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }



const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const zod = require("zod")


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

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
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

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    const allCourses = await Course.find({})
    console.log(allCourses);
    res.send({courses:allCourses})
});

module.exports = router;

