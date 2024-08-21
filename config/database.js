const mongoose=require("mongoose");

require("dotenv").config();
const connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
    })
    .then(()=>console.log("Db ka connections is Successful"))
    .catch( (error) => {
       console.log("Issue is DB Connection");
       console.log(error.message);
       process.exit(1);     
    } );
} 
module.exports=connect;


