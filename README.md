# note-taker
This is an application that can be used to write and save notes.

## Description and Motivation
The following project is to create an application that will make SVG files. The file can contain the shapes of either a circle, square or a triangle. You will also add a color background to the shape as well as characters in the middle of it, and pick that color as well.

It should looks something like this:

![img](./examples/logo.svg)

I built application with the thought and understanding that people could use a graphical genterator of basic shapes and have the opertunity to add colors for the shape and letters that you might want to put in there. It can eventually be expanded to build animations, add pictures or be used on someone's profile page.

The coding here covers much of what we learned over the last week and applied so that it will be solidified in my mind.


## Usage

The way you use this Application is:
- start up a commandline prompt in the directory of the cloned application.
- Run NPM install to install any dependancies: `npm install`  // This will install packages withing the package.json file
- Then execute the app with: `node index.js`  // This is the root of the running program.
- There are also tests to be run on this project. It echecks the more important classes that build the SVG files.
- To do this, you would `cd lib; npm run test`

Here is a link to the video that was taken to show you the process I used to run this application.
[Video of SVG Generator and Usage](https://watch.screencastify.com/v/8VTWFo4wkMpBOOnFfGIJ)

## Table of Contents

* [Technology Used](#technology-used)
* [Repo Location](#repo)
* [Screenshots of Application](screenshots-of-application)
* [Learning Points](#learning-points)
* [Code Snippets](#code-snippets)
* [Contact Info](#contact-info)

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
| Google Search | [https://www.google.com/](https://www.google.com/)
| Stack Overflow | [https://stackoverflow.com/](https://stackoverflow.com/)
| Digital Ocean for inquirer Help| [https://www.digitalocean.com/](https://www.digitalocean.com/)
| W3Schools for JS | [https://www.w3schools.com/](https://www.w3schools.com/)
| Dev for badges | [https://dev.to/cicirello/badges-tldr-for-your-repositorys-readme-3oo3](https://dev.to/cicirello/badges-tldr-for-your-repositorys-readme-3oo3)

## Repo 

[GitHub Repo](https://github.com/flimits/svg-maker)


## Screenshots of Application
---
### main code
![img](./examples/logooutput.png)
---
---
### Classes
![img](./examples/class%20parent%20and%20child%20.png)
---


## Learning Points 

It took me forever to get Heroku login. I suggest doing it as soon as humanly possible. Also had to wait for logins to be completed on Heroku's side before proceeding to get rights to publishing functionality. Other than that, it is a good platform to publish code (that is not html-only).

Another one was understanding how expressjs handles routing. this took a long time to understand, and takes a lot of playing around and reading on it. Once this is down, it will be super cool to keep playing with it.

## Code Snippets

There are two main parts to this setup from my point of view 
1 setup of the expressjs server and
2 setting up the ability of the server to update a file with a new note.


- This is the beginning setup of the ExpressJs server.
```js
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.port || 3001;

const app = express();
const db = require('./db/db.json');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

- Here is the code the will write the data to the notes db file. It basically take the note that was just created on the web page and then updates the notes database file with it by first reading in the whole file, then appending to the end of it. 
```js
    // Get current notes to parse them.
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const notesDb = JSON.parse(data);

            // Let's add a new note
            notesDb.push(newNote);

            db.push(newNote);

            // Update the note db with latest note added.
            fs.writeFile(
                './db/db.json',
                JSON.stringify(notesDb, null, 4),
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('Successfully updated note!')
            );
        }
    });
    ```
---
### Using the require statement in node.js

The fist part of the application was to learn to require packages and libraries to run it. It will not run without them.
// Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
Used test wisth jest




## Contact Info

| Name      |Email      | Github    | Portfolio |
|-----------|-----------|-----------|-----------|
|Jason       |flimits@gmail.com|https://github.com/flimits|https://github.com/flimits/my-portfolio/|



## Psuedo Code

The below was a psuedo coding exercise I did with others in order to come up with an attack plan of our to build the final touches on the Note-Taker application. 

### From the course story of what is required

* GIVEN a note-taking application
* WHEN I open the Note Taker
* THEN I am presented with a landing page with a link to a notes page
* WHEN I click on the link to the notes page
* THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text in the right-hand column
* WHEN I enter a new note title and the note's text
* THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
* WHEN I click on the Save button
* THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
* WHEN I click on an existing note in the list in the left-hand column
* THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
* WHEN I click on the "New Note" button in the navigation at the top of the page
* THEN I am presented with empty fields to enter a new note title and the note's text in the right-hand column and the button disappears

### Psuedo code part

* import express module to our server
* import require("./db/db.json")
* create app variable pointing to new express object(express())
* app.use(*middleware*){ -json, urlencoded, staticify(public)}
* 
* get/delete/post requests:
* 
* get request to send index.html, route: '/'
* get request to send notes.html, route: '/notes'
* 
* get request to fetch our api to send notes from db.json, route: '/api/notes'
* post request to fetch our api to modify with parsed req.body data and push post to db.json with fs.writeFile, route: '/api/notes', return res.json;
* delete request to delete specific note, *EXTRA CRED* remove specific data from db.json and push with fs.writeFile,  route: '/api/notes/:notes_id', return res.json;
* app.listen