const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shubhvora03:JDBzcwaZWZRb1Q5h@cluster0.1rd5y.mongodb.net/todoApp')

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}

