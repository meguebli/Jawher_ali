const express = require('express')
const app = express();
const fetch = require("node-fetch");
const queryString = require('query-string');
const moment = require('moment')
const wrapper = require('./wrapper')
app.use(express.json())
const getTimeLineURL = "https://api.tomorrow.io/v4/timelines";

const apikey = "IiYERuESCA0X2yDLRFBWDXd0Kfq5rVbV"
let location = [32.01045, 10.69961];
const fields =[
    "precipitationIntensity",
    "precipitationType",
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "cloudCover",
    "cloudBase",
    "cloudCeiling",
    "weatherCode",
];

const units = "imperial";
const timesteps = ["current"];
// configure the time frame up to 6 hours back and 15 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, "minutes").toISOString();
const endTime = moment.utc(now).add(1, "minutes").toISOString();

// specify the timezone, using standard IANA timezone format
const timezone = "Africa/Tunis";

const getTimeLineParameters = queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
}, {arrayFormat: "comma"})


app.get('/api',(req,res) =>
{ res.send(new wrapper(getTimeLineURL,getTimeLineParameters))})


app.listen(3000)