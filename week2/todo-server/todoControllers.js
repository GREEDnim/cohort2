const db = require('fs').promises;

async function getTodoById(req, res) {
    try{
        const data= JSON.parse(await db.readFile('database.json','utf-8'));
        const index = parseInt(req.params.id);
        if (isNaN(index) || index < 0 || index >= data.todos.length) {
            return res.status(400).json({ "error": "Invalid index" });
        }
        return res.status(200).json({value:data.todos[index]})
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

async function getAllTodos(req, res) {
    try{
        const data= JSON.parse(await db.readFile('database.json','utf-8'));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
    
}

async function addTodo(req, res) {
    const element = req.body.element;
    try{
        const data= JSON.parse(await db.readFile('database.json','utf-8'));
        data.todos.push(element);
        await db.writeFile('database.json',JSON.stringify(data));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

async function updateTodoById(req, res) {
    try{
        const index = parseInt(req.params.id);
        const data= JSON.parse(await db.readFile('database.json','utf-8'));
        if (isNaN(index) || index < 0 || index >= data.todos.length) {
            return res.status(400).json({ "error": "Invalid index" });
        }
        const updatedElement = req.body.element;

        data.todos[index]=updatedElement;
        await db.writeFile('database.json',JSON.stringify(data));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

async function deleteTodoById(req, res) {
    try{
        const index = parseInt(req.params.id);
        const data= JSON.parse(await db.readFile('database.json','utf-8'));
        if (isNaN(index) || index < 0 || index >= data.todos.length) {
            return res.status(400).json({ "error": "Invalid index" });
        }
        data.todos.splice(index,1)
        await db.writeFile('database.json',JSON.stringify(data));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

async function deleteAllTodos(req, res) {
    try{
        const data={
            "todos":[]
        }
        await db.writeFile('database.json',JSON.stringify(data));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

module.exports = {
    getTodoById,
    getAllTodos,
    addTodo,
    updateTodoById,
    deleteTodoById,
    deleteAllTodos
};
