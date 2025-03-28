const express = require("express")
const cors = require("cors")
const helmet = require('helmet')
const mongoSanitize = require("express-mongo-sanitize")
const dataRouter = require("./routes/dataRouter")
const userRouter = require("./routes/userRouter")



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


// API ROUTES SETTING


app.use("/api/v1/data", dataRouter)
app.use("/api/v1/users", userRouter)

/// HEADERS SETTING

app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
  });






module.exports = app;