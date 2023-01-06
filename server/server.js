const { application } = require("express");
const express =  require("express");
const mysql = require('mysql2');
const app = express();
const cors  =require("cors");
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "pass123",
            database:'books'
});

app.listen(5000, ()=>{
    console.log("Congrats! You are up");
});

app.post('http://localhost:5001',(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;

    db.query("INSERT INTO books ('id','name') VALUE (?,?)",[id,name],(err,result)=>{
        if (err)
        console.log(err);
        else
        res.send("Successful");
    })
});

