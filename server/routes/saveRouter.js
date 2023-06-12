const express = require('express');
const saveController = require('../controller/saveController')
const saveRouter = express.Router();

saveRouter.post('/', saveController.saveImage, (req, res) => {
    res.status(200).json(res.locals.newOutfit);
})
// saveRouter.get('/', saveController.getImage, (req, res) => {
//     res.status(200).json();
// })

module.exports = saveRouter;