/********************************************************************************
*  WEB700 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Anmoldeep Singh Student ID:139671242  Date:05-09-2025
*
********************************************************************************/
const serverMethods = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login"];
const serverResponses = ["Home","Main Storefront","Manage Products","Registered New User",
  "Developed by: Anmoldeep Singh : asingh1482@myseneca.ca","User Logged In"
];

function processRequest (method , route ) {

for (let i = 0; i < serverRoutes.length; i++) {
        if (serverMethods[i] === method && serverRoutes[i] === route) {
            return `200: ${serverResponses[i]}`;
        }
    }
        return `404: Unable to process ${method} request for ${route}`;
}

// console.log(processRequest("GET", "/"));
// console.log(processRequest("GET", "/developer"));
// console.log(processRequest("POST","/store-admin"))
// console.log(processRequest("POST", "/"));
// console.log(processRequest("GET","/store-admin"));
// console.log(processRequest("POST","/store-admin"));


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function testRequests() {
  
    const testMethods = ["GET", "POST"];
    const testRoutes = [
        "/", "/store", "/store-admin", "/register",
        "/developer", "/login", "/notFound1", "/notFound2"
    ];
    
    function randomRequest() {
      
        const randMethod = testMethods[getRandomInt(testMethods.length)];
        const randRoute = testRoutes[getRandomInt(testRoutes.length)];
       
        console.log(processRequest(randMethod, randRoute));
    }
   setInterval(randomRequest, 1000);
}
testRequests();

