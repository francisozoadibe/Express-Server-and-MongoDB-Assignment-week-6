const express = require("express")
const dotenv = require("dotenv").config()
// or dotenv.config()
const mongoose = require("mongoose")


// check on how to import and export tomorro
const { customerPostRequest, customerGetRequest, customerUpateRequest, customerDeleteRequest } = require("./function")


const app = express() // here telling our app to run on express() function


// creation of the middleware function
app.use(express.json())
// here we are telling app to use the express body parser that comes with express and pass json into our backend
const PORT =process.env.PORT || 6500

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

// connecting our backend or server to the database
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB is connected..")
})
// the next thing to do is to  declare the endpoint for instance below and this end points are our APIs
app.post("./addNewCustomers", customerPostRequest)

app.get("./getNewcustomer", customerGetRequest)

app.put("./customerUpdate", customerUpateRequest)

app.delete("./customerRemove", customerDeleteRequest)