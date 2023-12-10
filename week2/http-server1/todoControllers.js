let todos = [];

function getTodoById(req, res) {
    const index = parseInt(req.params.id);
    if (isNaN(index) || index < 0 || index >= todos.length) {
        return res.status(400).json({ "error": "Invalid index" });
    }
    return res.status(200).json(todos[index]);
}

function getAllTodos(req, res) {
    return res.status(200).json(todos);
}

function addTodo(req, res) {
    const element = req.body.element;
    console.log(element);
    todos.push(element);
    return res.status(201).json({ "message": "Todo added successfully" });
}

function updateTodoById(req, res) {
    const index = parseInt(req.params.id);
    if (isNaN(index) || index < 0 || index >= todos.length) {
        return res.status(400).json({ "error": "Invalid index" });
    }
    const updatedElement = req.body.element;
    todos[index] = updatedElement;
    return res.status(200).json({ "message": `Todo updated at index ${index}` });
}

function deleteTodoById(req, res) {
    const index = parseInt(req.params.id);
    if (isNaN(index) || index < 0 || index >= todos.length) {
        return res.status(400).json({ "error": "Invalid index" });
    }
    todos.splice(index, 1);
    return res.status(200).json({ "message": `Todo deleted at index ${index}` });
}

function deleteAllTodos(req, res) {
    todos = [];
    return res.status(200).json({ "message": "All todos deleted" });
}

module.exports = {
    getTodoById,
    getAllTodos,
    addTodo,
    updateTodoById,
    deleteTodoById,
    deleteAllTodos
};
