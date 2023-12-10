const express = require('express');
const router = express.Router();

const {
  getTodoById,
  getAllTodos,
  addTodo,
  updateTodoById,
  deleteAllTodos,
  deleteTodoById
} = require('./todoControllers');

router.get('/get/:id', getTodoById);
router.get('/getall', getAllTodos); 

router.post('/add', addTodo);
router.patch('/update/:id', updateTodoById);

router.delete('/delete/:id', deleteTodoById);
router.delete('/deleteall', deleteAllTodos);

module.exports = router;
