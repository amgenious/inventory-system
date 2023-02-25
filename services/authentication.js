const User = require("../models/userlogin")
const Admin = require("../models/adminlogin")


exports.userSignup = async (req,res) => {
    const data = {
        username:req.body.username,
        password:req.body.password
    }

    await User.insertMany([data])

    res.render('userlogin', {title:'User Login'})
}
exports.userLogin = async (req,res) => {
    try{
     const check = await User.findOne({username:req.body.username,password:req.body.password})
 
     if(check.password === req.body.password){
         res.render('userviews/locations/index', {title:'Inventory - Location'})
     }
     else{
         res.send("wrong password")
     }
    }
    catch{
         res.send("Wrong Credentials")
    }   
 }

 exports.adminSignup =async(req, res)=>{
      const admin = new Admin({
             username: 'Henry',
              password: '123456789',
      })
        admin.save()
              .then((result) => {
                  res.send(result)
              })
             .catch((err) => {
                  console.log(err)
              })
}
exports.adminLogin = async (req,res) => {
    try{
     const check = await Admin.findOne({username:req.body.username,password:req.body.password})
 
     if(check.password === req.body.password){
        res.render('adminviews/locations/index', {title:'Inventory - Admin location'})
     }
     else{
         res.send("wrong password")
     }
    }
    catch{
         res.send("Wrong Credentials")
    }   
 }
