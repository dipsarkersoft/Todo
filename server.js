const express=require('express')
const mongoose=require("mongoose")
var cors = require('cors')

require("dotenv").config()
const {readdirSync}=require("fs")

const app=express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));




readdirSync("./src/routes").map(r =>app.use("/api/v1", require(`./src/routes/${r}`)))



//Database

const port=process.env.PORT
const dataBase=process.env.DATABASE

mongoose.connect(dataBase,(error)=>{
     console.log(error)
})


app.listen(port,(error)=>{
     if(error){console.log(error)}
     else{console.log("database connection Sucesss"+port)}
})