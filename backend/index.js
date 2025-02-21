const port =4000;
const express =require("express");
const app =express();
const mongoose =require("mongoose");
const jwt = require("jsonwebtoken");
const multer =require("multer");
const path =require("path");
const cors =require("cors");
const { error, log } = require("console");
const { type } = require("os");


app.use(express.json());
app.use(cors());
//conect db
mongoose.connect("mongodb+srv://ahmadziad758:Awni2003@cluster0.qwuhw.mongodb.net/e-commerce")

//api
app.get("/",(req,res)=>{
    res.send("Express App is running")
})
//imge stoarge
const stoarge = multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload =multer({storage:stoarge})
app.use("/images",express.static("upload/images"))
app.post("/upload",upload.single("product"),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`,
    })
})
const Product=mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    new_price:{
        type: Number,
        required:true,
    },
    old_price:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now
    },
    avilable:{
        type: Boolean,
        default:true,
    },
})
app.post("/addproduct",async(req,res)=>{
    let products =await Product.find({});
    let id;
    if (products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id =last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//api for delete
app.post("/remove",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name
    })
})
//get all product
app.get("/all",async(req,res)=>{
    let products =await Product.find({});
    console.log("All");
    res.send(products);
})

//for user
const Users =mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,

    },
    cartData:{
        type:Object, 
    },
    date:{
        type:Date,
        default:Date.now,
    }
})
//end point
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,error:"existing user found with same email"})
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user =new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})
//endpoint for products
app.get('/Mens' ,async(req,res)=>{
    let productes =await Product.find({});
    let products =productes.slice(1).slice(-8);
    console.log('products');
    res.send(products);
})
//login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare =req.body.password === user.password;
        if(passCompare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else {
            res.json({success:false,error:'Wrong password'});
        }
    }
    else{
        res.json({success:false,error:"Wrong email id"})
    }
})
  
app.listen(port,error=>{
    if (!error){
        console.log("Server running on port" +port)
    }
    else
    {
        console.log("error" +error)
    }
})