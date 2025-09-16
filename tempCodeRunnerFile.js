function processRequest (method , route ) {

for (let i = 0; i < serverRoutes.length; i++) {
        if (serverMethods[i] === method && serverRoutes[i] === route) {
            return `200: ${serverResponses[i]}`;
        }
    }
        return `404: Unable to process ${method} request for ${route}`;
}