# Description
This is a backend project for managing the Help center datacards. It includes basic functionality for interacting with a MongoDB database and handling cors.

# Installation
Create `Package.json`
npm init

Installing required Packages
npm install express mongoose cors nanoid nodemon

# Changes in Package.json
In script include 
{"dev":"nodemon index.js"}

# Usage
Starting the server
Use 
npx nodemon index.js
or 
npm run dev

#   API Endpoints

Get /api/card/getcards 
description: for retrieving all the cards

Get api/card/:title
description: for retrieving specific card

Post api/card/submit 
description: To add a data card to the database 

