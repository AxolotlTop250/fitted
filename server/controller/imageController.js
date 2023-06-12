const express = require('express');
const { Leap } = require('@leap-ai/sdk');
const dotenv = require('dotenv');
dotenv.config();
const leap = new Leap(process.env.LEAP_API_KEY);

const imageController = {};

imageController.generateImage = async (req, res, next) => {
    const { prompt } = req.body;
    try {
        const response = await leap.generate.generateImage({
            prompt: prompt,
            promptStrength: 0
        });
        const imageUrl = response.data.images[0].uri;
        res.locals.generatedData = {
            success: true,
            data: imageUrl
        }
        return next();
    }
    catch (error) {
        return next({
            log: "Express error handler caught an error in the imageController.generateImage middleware",
            status: 500,
            message: {err: "An error occurred in the imageController.generateImage middleware"}
        })
    };
};

module.exports = imageController;