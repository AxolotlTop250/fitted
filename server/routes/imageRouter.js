const express = require('express');
const imageController = require('../controller/imageController');
const imageRouter = express.Router();

imageRouter.post('/', imageController.generateImage, (req, res) => {
    res.status(200).json(res.locals.generatedData)
})

module.exports = imageRouter;