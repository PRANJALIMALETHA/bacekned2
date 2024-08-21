// //server instantiate//crete own server
// const express=require("express");//import express framework
// const app=express();

//activate the server on the 3000 port
// app.listen(8000,()=>{
//     console.log("App is running successfully");
// });
// app.get('/',(req,res)=>{
//     res.send("hello jee");
// })
//routes
// app.get('/',(req,res)=>{
//     res.send("hii this is pranjali(error 404)");
// })

// app.post('/api/cars ',(request,response)=>{
//     const{name ,brand}=request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("Car submitted successfully");
// });
// const mongoose=require('mongoose');


// mongoose.connect('mongodb://localhost:27017',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })

// .then(()=>{
//     console.log("connection successful")
// })
// .catch((error)=>{console.log("Recieved  an e")})


// require('dotenv').config();
// const PORT=process.env.PORT ||4000;
// app.use(express.json());
// require("./config/database").connect();


// //route import and mount
// const user=require("./routes/user");
// app.use("/api/v1",user);


// //actuivate....or run your server
// app.listen(PORT,()=>{
//     console.log(`App is listening at ${PORT}`);
// })
// //connect 
// const dbConnect=require("./config/database");
// dbConnect();


// app.get('/',(req,res)=>{
//      res.send("hii this is pranjali(error 404)");
// })

// Import required modules
const express = require("express");
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 4000;

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database

// Import and mount routes
const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);




// Start the server
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

// Define root route
app.get('/', (req, res) => {
    res.send("Welcome to the server!");
});

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});








