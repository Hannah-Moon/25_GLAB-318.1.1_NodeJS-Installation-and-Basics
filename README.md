
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
  
## Summary of lesson
#### (Instructional code was written by an instructor) 

```rb
// a) npm init -y    ----> package.json*
// b) npm i {{dependencyName }} ----> package.LOCK.json* && node_modules
// if()--> dependency != installed:
//mac: [sudo npm i whateverDepName]
// c) change "start" script in package.json to use nodemon
//  "start": "nodemon whateverFile.js"
// d) open a main file (server.js ) ----vvvvvvv-------

// ---------------------------------[Setup]

// --> (?) THE BIG 3 ------- runningTheServer
// 1. use require statements to import all of the needed depend/libs for the app.
const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || "3000";
const app = express();
// 2. initializing express to run

// ----------------------------{MiddleWare}-----------

app.use(body-parser)

// --------------------------------------------------

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
// ---------------------------------------[Routes]

app.listen(PORT, (req, res) => {
  console.log(`Currently Listening on ${PORT}`);
});
// Creating the express server. and the port to run it on
```

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

## License

[MIT](https://choosealicense.com/licenses/mit/)
