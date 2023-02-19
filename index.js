const express = require("express");
const cors = require("cors");
const {connection} = require("./db");
const {todoRouter} = require("./routes/Todo.routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use("/todos" , todoRouter)

app.listen(process.env.port , async ()=>{
     try {
        await connection;
        console.log("connected to the database")  
    } catch (error) {
       console.log("can't connect to db"); 
    }
    console.log(`Server is running at port${process.env.port} `)
})