/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Hanbo Zhang Student ID: 138092234 Date: 12/Sep/2024
*
********************************************************************************/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log("Hello World!");
const serverVerbs =["GET","GET","GET","POST","GET","POST"];
const serverPaths =["/","/about","/contact","login","panel","logout"];
const serverResponse =["Welcome to WEB700 Assignment 1","This assignment was prepared by Hanbo Zhang",
    "Hanbo Zhang : hzhang310@myseneca.ca","User Logged In","Main Panel","Logout Complete"];

function httpRequest(httpVerb,path){
    for(let i = 0;i<serverPaths.length;i++){
        if(serverPaths[i] == path && serverVerbs[i] == httpVerb){
            return "200: "+serverResponse[i]
        }               
    }  
    return "404: Unable to process "+httpVerb+" request for "+path 
}
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/"));

function automateTests(){
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest(){
        const randVerb = testVerbs[getRandomInt(2)];
        const randPath = testPaths[getRandomInt(8)];

        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest,1000);

}

automateTests();