const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
// const Mobile  = require("./models/Phone")
const {body,validationResult} =require("express-validator")

const  mongoose  = require("mongoose")
// mongoose.set('useCreateIndex', true);
 const connect = () => {
    return mongoose.connect(`mongodb+srv://ritik:8505805813@cluster0.w0p4q.mongodb.net/mama?authSource=admin&replicaSet=atlas-11mzy7-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`)

  
}
const Product = require("./models/product")
const User = require("./models/user")
app.use(cors())


  app.get("/data",async(req,res)=>{
    try{
        let user = await Product.find().lean().exec()
        return res.json(user).status(200)
   } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  });
app.get("/data/:id",async(req,res)=>{
    try {
        let user = await Product.findById(req.params.id).lean().exec();
        console.log(user)
        return res.status(200).json(user)
    
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
    
app.get("/category/:category", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 18;
        const skip = (pagenumber - 1) * pagesize;
      const product = await Product.find({ category: req.params.category }).skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find({ category: req.params.category }).countDocuments() / pagesize);
        res.status(200).json({ product: product, totalpage: totalpage });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})







 app.get("/limit/:limit/:page",async(req,res)=>{
    try{
        let user = await Product.find().skip(req.params.limit * req.params.page).limit(req.params.limit).lean().exec()
        return res.json(user).status(200)
   } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  });



const MobileSchema = new mongoose.Schema({

mobile: {
        type: String
    },
   

})

const Mobile = mongoose.model("mobiles", MobileSchema)

app.post("/posts", async(req, res) => {
   
      const blog = new Mobile(req.body);
    blog.save().then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
})


app.get("/mobile", async (req, res) => {
  try {
      const mobile = await Mobile.find().lean().exec();
    res.status(200).json(mobile);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.post(
    "/register",
    body("first_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    // .isLength({ min: 4 })
    // .withMessage("First Name must be at least 4 characters"),
    .isLength({min:4})
    .withMessage("First Name must be at least 4 characters"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("second_name").custom((value) => {
    if (value && value.length < 4) {
      throw new Error("Last Name if provided must be at least 4 characters");
    }
    return true;
  }),

  
  async (req, res) => {
    try {
      console.log(body("first_name"));
           const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
        } 
        
     
 const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

app.get("/login", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
})

 
app.listen(PORT, () => {
      connect()
      console.log(`Server running on port ${PORT}`)
  })