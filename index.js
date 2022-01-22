const express = require('express')
const app = express()
const cors = require("cors")
const port =  4001
const aqiRouter = require("./src/routes/aqi")

app.use(express.json())
app.use(cors())
app.use(aqiRouter)

app.listen(port,()=>{
    console.log("Server running on: " + port)
})
