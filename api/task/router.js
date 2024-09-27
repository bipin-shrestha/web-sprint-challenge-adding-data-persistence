// build your `Task` model here
const express = require('express');
const tasks = require('./model.js');

const taskRouter = express.Router();

taskRouter.get('/',(req, res, next) => {
    tasks.getTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(next);
})

taskRouter.post('/',(req, res, next) => {
    tasks.createTask(req.body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(next);
})

module.exports = taskRouter;