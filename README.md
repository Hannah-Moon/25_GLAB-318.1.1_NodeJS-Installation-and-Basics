
# GLAB 318.1.1: NodeJS Installation and Basics


## Introduction

NodeJS (or simply Node) is a very popular JavaScript runtime that enables developers to create JavaScript applications outside of the context of a web browser. This lab will walk you through the steps of installing Node and the Node Package Manager (npm) on Windows.

## Objectives

- Install Node.
- Install npm.
- Use basic Node commands to run JavaScript code outside of a browser.
- Use basic npm commands to:
- Create a package file.
- Install packages.
- Run a program.
  
## Key take away
- The guiding instructional code was written by an instructor, and I revised it with my personal notes.

```rb


// ---------------------------------[Pre-steps]

 → npm init -y          # Initialize express project
 → npm install express  # Install express module (always)
 → create & open a main file (index.js ): touch 

 → npm i -D nodemom     # Install nodemon (Use this for only development. Not for the production.

 → change "start" script in package.json: "start": "node index"  # Keep resetting the server every time I make changes.
 → change "start" script in package.json: "dev": "nodemon index" # consistently watch it.

 → open two terminals
 → npm start            # monitor realtime update 

// ---------------------------------[ejs template]
 → npm install ejs      # install ijs module
 → mkdir views          # create dir for (*.ejs)
 → mkdir routes         # routing folder for client request
 → mkdir public         # plubic folder for (*.html, *.css, *.js)


// ---------------------------------[Setup]

// --> (?) THE BIG 5 ------- Basic server syntax 

// 1. Use require statements to import all of the needed depend/libs for the app.

const express = require("express");
const bodyParser = require('body-parser');      # Optional - We use this when we have a lot of data. 
const PORT = process.env.PORT || "3000";        # Set up a port environment. 


// 2. Initializing express to run

const app = express();                          # Init express. 


// 3. Set up middleware

app.use(body-parser)


// 4. Create endpoints / route handlers 

app.get("/", (req,res) => {
    res.send("This is the homepage")
});

app.get("/about/:title", (req, res) => {
    // res.send("This is the About")   
    res.send(`This is the title :  ${req.params.title}`)
});

app.get("/test", (req, res) => {
    res.send("This is a TEST")
});

// ---------------------------------[REST ROUTES]

// app.post()
// HTTPMETHODS = get, post, put ,delete


// 5. Listen on a port

app.listen(PORT, (req, res) => {
  console.log(`Currently Listening on ${PORT}`);
});

```

## Summary of lesson

```rb
// Node 
    // RuntimeEnvio -> can execute JS code without browser
        // ->has its own (Node) environment variables -- *does not have DOM and BOM 

// Single Threaded -> one task at a time
// Async -> can be used asynchronously

// Client-Server Model 
    // 1. Client Triggers Event
    // 2. Event Triggers Func()
    // 3. Func() Triggers a REQUEST/ fetch-axios
    // 4. Request travels to Server
    // 5. Server [GRABS] data and send request back
// ---------------------------------------------
// ---------------------------------------------

// HTTPrequests
    // GET --> app.get()
        // Requests using GET should only retrieve data.

    //  POST---> app.post()
        // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

    //  PUT --> app.put()
        // The PUT method replaces all current representations of the target resource with the request payload.
    
    //  DELETE --> app.delete()
        // The DELETE method deletes the specified resource.
// ---------------------------------------------
// ---------------------------------------------

// Building API
    // -- Require()Statements are like imports
    // (imports data from npm catalogue)
   
    const http = require('http')

    // .createServer -> Creates Simple server
    http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("Hello World");
      res.end();
    }).listen(3000, () => {
      console.log(`Server running.`);
    });
    
// HTTPresponses

// Create Server
```
