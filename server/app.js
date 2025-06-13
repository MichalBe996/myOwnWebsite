const express = require("express")
const cors = require("cors")
const helmet = require('helmet')
const mongoSanitize = require("express-mongo-sanitize")
const userRouter = require("./routes/userRouter")
const rateLimit = require("express-rate-limit")
const xss = require("xss-clean")
const hpp = require("hpp")



const app = express()

//  --------GLOBAL MIDDLEWARES---------


// SETTING UP CORS MIDDLEWARE
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true
}
app.use(cors(corsOptions))

// SECURING THE HTTP HEADERS
app.use(helmet())


// DATA SANITIZATION AGAINST NoSQL QUERY INJECTIONS
app.use(mongoSanitize())

// DATA SANITIZATION FROM XSS (malicious html code from the input)
app.use(xss())

// PREVENT PARAMETER POLLUTION

app.use(hpp({
  whitelist: ["type"]
}))


// LIMITING THE NUMBER OF REQUESTS PER ON IP ADRESS IN 1 HOUR TIMEFRAME
const limiter = rateLimit({
  max: 100,
  windowsMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later"

})

app.use("/api", limiter)


// MIDDLEWARE FOR POST REQUESTS

app.use(express.json())

//

// API ROUTES SETTING


// app.use("/api/v1/users", userRouter)

/// HEADERS SETTING - allowing cross origin for frontend/backend communication 

app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
  });






module.exports = app;