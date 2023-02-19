const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title:String,
    desc:String,
    status:Boolean
})

const TodoModel = mongoose.model("todo" , todoSchema);

module.exports={
    TodoModel
}