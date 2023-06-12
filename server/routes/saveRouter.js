const express = require('express');
const saveController = require('../controller/saveController')
const saveRouter = express.Router();

// this router is specifically for the 'save' button on each generated image

saveRouter.post('/', saveController.saveImage, (req, res) => {
    res.status(200).json(res.locals.newOutfit);
})

module.exports = saveRouter;