require('dotenv').config();
const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose');
const service = require("./services/authentication")


const app = express();

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

// database connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI);
try{
    console.log('database connected')
}
catch (err) {
    console.log(err)
}

//database function ei login, signup,
//how to add admin user details
app.get('/adminsignup', service.adminSignup);

app.post('/adminlogin', service.adminLogin);

//user signup and login function
app.post('/usersignup', service.userSignup)

app.post('/userlogin', service.userLogin)


// routes connection
app.use('/', require('./routes/router'))
app.use('/', require('./routes/adminrouter'))

//404 
app.use((req, res) => {
    res.status(404).render("404", { title: "Page not found" });
})

// port number
app.listen(process.env.PORT, console.log("Running on port http://localhost:4001"))