const express = require('express');
const app = express();
const path = require('path');
// import { Leap } from ;
const { Leap } = require('@leap-ai/sdk');
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const leap = new Leap(process.env.LEAP_API_KEY);
// uncomment the below for proxy challenge

// parses the json sent from the client
app.use(express.json());
app.use(express.static('public'));

app.post('/', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    // leap.usePublicModel('rv-2.0');

    const response = await leap.generate.generateImage({
      prompt: prompt,
      promptStrength: 0,
    });
    const imageUrl = response.data.images[0].uri;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/
