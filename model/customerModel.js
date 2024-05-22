mongoose = require("mongoose")

// we are creating our schema in which we will pass our object
const customerSchema = new mongoose.Schema({
    // inside here put an object
    firstName:{type:String, require},
    email:{type: String, require},
    age:{type: Number, require},
    tribe:{type: String},
    religion:{type: String},
    designation:{type: String}
})

const Customers = new mongoose.model("Customers", customerSchema)
// on the database it will be called customers


// let export it so that so that we can use it outside

module.exports = Customers

// go to the database an create a model/session for your Customer, and that session should be using customerSchema
// next is to make a postrequest with the above details Customer


