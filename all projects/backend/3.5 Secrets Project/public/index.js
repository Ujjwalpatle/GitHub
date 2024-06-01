//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorized = false;

//bodyParser
app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req, res, next){
    const pass = req.body["password"];
    if(pass === "my_name"){
        userIsAuthorized =true;
        next();
    }else{
        console.log("wrong password");
    }
    
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
  app.post("/check", (req, res) => {
    if (userIsAuthorized) {
      res.sendFile(__dirname + "/secret.html");
    } else {
      res.sendFile(__dirname + "/index.html");
      //Alternatively res.redirect("/");
    }
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  


