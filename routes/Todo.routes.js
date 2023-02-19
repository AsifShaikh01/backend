const express = require("express");
const {TodoModel} = require("../model/Todo.model")

const todoRouter = express.Router();

todoRouter.get("/" , (req,res)=>{
    res.send("Welcome to Todo app")
})
todoRouter.get("/todos" , async (req,res)=>{
   try {
      const todos = await TodoModel.find();
      res.send(todos)
   } catch (error) {
        res.send(error)
   }
})

todoRouter.post("/create" , async (req,res)=>{
    const payload = req.body;
    try {
        const todo = new TodoModel(payload);
         await todo.save();
        res.send("Todo is added to the list")
        
    } catch (error) {
        res.send(error)
    }
})
todoRouter.patch("/update/:id" ,async (req,res)=>{
    const payload = req.body;
    const ID = req.params.id
    try {
       await TodoModel.findByIdAndUpdate({_id:ID} , payload)
        res.send("Todo has been updated")
    } catch (error) {
        res.send("cannot update todo")
    }
})
todoRouter.delete("/delete/:id" , async(req,res)=>{
    const ID = req.params.id
    try {
       await TodoModel.findByIdAndDelete({_id:ID})
        res.send("Todo has been deleted")
    } catch (error) {
        res.send("cannot delete todo")
    }
})


module.exports={
    todoRouter
}