const express = require('express');
const imageController = require('../controller/imageController');
const imageRouter = express.Router();

// this router is specifically for the 'generate' button on the homepage

imageRouter.post('/', imageController.generateImage, (req, res) => {
    res.status(200).json(res.locals.generatedData)
})


module.exports = imageRouter;