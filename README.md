# fitted

An app to help you decide what outfit to wear using AI Image generation utilizing the Leap AI API.

# Tech Stack

Fitted utilizes a stack including:
  - React
  - Redux
  - JavaScript + JSX
  - HTML/CSS + SASS (SCSS)
  - Node.js and Express.js
  - SQL Database

# Features

Fitted currently includes the following features:
  - Five User Input fields that populate a custom query to the Leap AI SDK which is routed through a custom controller and our server
  - A Generate button that calls the 'POST' request to the SDK router
  - A generated component that displays the resulting CDN URI produced from the fetch request as an image with a custom polaroid border
  - A save button for each generated image that correctly queries our custom SQL database and saves the URL of the associated image to the database with a unique serial ID

# Stretch Goals / Iterative Goals

Our stretch goals include adding a '/favorites' endpoint URL in which you can access a rendered list of the saved images from our database. We would also like to incorporate a 'closet' component in which users can save custom pieces from their real life wardrobe, and instead of a custom text input, users can select from a drop down of options that they saved themselves. 

The main iterative goal would be to implement a more detailed database for the user's 'closet' of which a schema is set up for each article of clothing (top, bottom, shoes) as well as DELETE functionality on the favorites database. Currently the app is missing DELETE functionality for a CRUD application.

The codebase is fully populated with pseudocode to notate the most important pieces of functionality. Please take a moment to read through all of the notes.