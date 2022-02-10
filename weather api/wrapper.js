const fetch = require("node-fetch");

class  wrapper  {
    constructor (getTimeLineURL,getTimeLineParameters){
        this.getTimeLineURL=getTimeLineURL;
        this.getTimeLineParameters=getTimeLineParameters
    
     fetch (getTimeLineURL + "?" + getTimeLineParameters, {method : "GET"}) 

        .then(result =>
           result.json()
        )
        .then (data => { console.log(JSON.stringify(data.data)); console.log(data.data);})
     
    .catch ((error) => console.error("error: " ))
    } 
    
 }

module.exports = wrapper 