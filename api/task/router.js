// build your `/api/tasks` router here
const express = require('express');
const tasks = require('./model');

const taskRouter = express.Router();

module.exports = taskRouter;