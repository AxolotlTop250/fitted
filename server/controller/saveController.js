const db = require('../models/fittedModels.js')
const express = require('express');

// this controller handles the functionality to query to the database when a generated image's save button is clicked

const saveController = {}
saveController.saveImage = async (req, res, next) => {
    const { url, id } = req.body;
    const text = `INSERT INTO public.outfits VALUES (DEFAULT , '${url}')`;
    try {
        const result = await db.query(text);
        res.locals.newOutfit = result.rows[0];
        return next();
    }
    catch(error) {
        console.error(error)
        return next({
            log: "Express error handler caught an error in the saveController.saveImage middleware",
            status: 500,
            message: {err: "An error occurred in the saveController.saveImage middleware"}
        })
    }
}


module.exports = saveController;