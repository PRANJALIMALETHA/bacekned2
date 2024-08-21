const Todo=require("../models/Todo");
//define route handler


exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from reauest body
        const{title,description}=req.body;

        //create a new todo bj and insert in db
        const response=await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry Created Successfully"
            }
        );

    }
    catch(err)
    {
        console.error(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        });

    }
}