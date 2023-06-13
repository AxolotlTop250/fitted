const express = require('express');
const { Leap } = require('@leap-ai/sdk');
const dotenv = require('dotenv');
dotenv.config();
const leap = new Leap(process.env.LEAP_API_KEY);

const imageController = {};

// this is the post middleWare for the leap api, it is utilizing their SDK which made it very easy to access and use their API.
  // leap.usePublicModel was causing a 400 bad request error, so we reccomend not using it but you can try
  // as you can see, leap.generate.generateImage is doing a lot of heavy work in terms of formatting our res body
  // prompt is being pulled from our options component onClick, which sends the url through the req.body.prompt
  // it is stored and passed into the response and then a custom image should be generated according to the prompt
  // very vulnerable to user error, so trying to limit user error is a good idea for iteration

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