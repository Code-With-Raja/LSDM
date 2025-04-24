require("dotenv").config();
const express= require("express");
const cors = require ("cors");
const bodyParser = require('body-parser');
const User = require("./User")


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

 


 




  app.post("/signup", async (req, res) => {
    const { firstname, secondname, email, password, confirmpassword} = req.body;
    try {
      const newEntry = new User({ firstname, secondname, email, password, confirmpassword})  
      await newEntry.save();
      res.send ({ seccess: true })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/login", async (req, res) => {
    
      const { email, password } = req.body;
       const user = await User.findOne({ email, password })
      if (user){
        res.send ({success: true});
      } else{
        res.send({seccess: false});
      }
   
  });


app.listen(3000)
