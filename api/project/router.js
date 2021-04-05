// build your `/api/projects` router here
const express = require('express');
const projects = require('./model.js');

const projectRouter = express.Router();

projectRouter.get('/', (req, res, next) => {
    projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(next);
})

projectRouter.post('/', (req, res, next) => {
    projects.createProject(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next); 
})

module.exports = projectRouter;