const mongoose = require("mongoose");


mongoose.connect ("mongodb+srv://prabhatkumardas1992:IXls3SphseRr21OK@wbregistration.mvpt7.mongodb.net/?retryWrites=true&w=majority&appName=WbRegistration").then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));




const FormSchema = new mongoose.Schema({
  firstname: { type: String, required: true, unique: true },
  secondname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true }
});


module.exports = mongoose.model("Form1", FormSchema)
