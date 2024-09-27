// build your `/api/resources` router here
const express = require('express');
const resources = require('./model.js');

const resourceRouter = express.Router();

resourceRouter.get('/',(req, res, next) => {
    resources.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(next);
})

resourceRouter.post('/',(req, res, next) => {
    resources.createResource(req.body)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(next);
})

module.exports = resourceRouter;