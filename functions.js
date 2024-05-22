// CREATION OF GET REQUEST

// after creating your server, the next thing is to start to communicate with the server for instance the below functions
 
// ensure you import your schema
const customerModel = require("./model/customerModel")

  

// CREATION OF POST REQUEST
// nb, in post request we will be getting data from the users

const customerPostRequest = async(request, response)=>{
    // or you decide to accept email and password from the user by creating a variable below
    const { firstName, age, email, designation, tribe, location } = request.body

    const newCustomer = new customerModel( {firstName, age, email, designation, tribe, location })

    await newCustomer.save()
// the reason for await is because it might take a while

    if(!email){
        return response.status(400).json({
            message: "please add your email address corectly"
        })
    }
    if(!email.includes("@")){
      return response.status(400).json({
          message: "please add ur @ sign"
      })
    }

    return response.status(200).json({message:"getting user data successfully.."})
    newCustomer
    // student deails: newCustomer
// send back what ever they send in request.body
   

}


// go back to main files and import them there


const customerGetRequest = async(resquest, response)=>{

    const customers = await customerModelustomerModel.find()

    return response.status(200).json({ message: "customers"})
   }
   

const customerUpateRequest = async(request, response)=>{
    const { id } = request.params
    const { firstName, age, designation, tribe, email, location } = request.body
    return response.status(200).json({message:"Customer record updated successfully..", customer})
}


const customerDeleteRequest = async(request, response)=>{
    const { id } = request.params

    const removeCustomer = await customerModel.findByIdAndDelete(id)
    return response.status(200).json({message: "Customer record is deleted succesful.."})
}

module.exports = {
    customerPostRequest,
    customerGetRequest,
    customerUpateRequest,
    customerDeleteRequest
}