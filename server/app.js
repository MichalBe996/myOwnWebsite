const express = require("express")
const cors = require("cors")
const dataRouter = require("./routes/dataRouter")
const userRouter = require("./routes/userRouter")



const app = express()


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true
}
app.use(cors(corsOptions))
app.use("/api/v1/data", dataRouter)
app.use("/api/v1/users", userRouter)






module.exports = app;