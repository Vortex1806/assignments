const zod = require('zod');

// { todo
//     title:
//     description:
// }
// { completed
//     id:
// }

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}