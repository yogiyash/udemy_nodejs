const express = require ("express");

const app = express();

app.get("/",(req,res)=> {
    res.send("system is running express");
});

app.get("/fault",(req,res)=>{
    res.status(404).send("Bad Monkey")
})

app.listen(3000);

