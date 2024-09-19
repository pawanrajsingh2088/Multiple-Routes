const express = require("express");
const port = 4444;
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcomes to multiple routes....");
})

app.post("/add",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = Number.parseInt(a) + Number.parseInt(b);
    res.send(`Sum of ${a} and ${b} = ${sum}`);
})

app.post("/sub",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sub = Number.parseInt(a) - Number.parseInt(b);
    res.send(`Difference of ${a} and ${b} = ${sub}`);
})

app.post("/multiply",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const product = Number.parseInt(a) * Number.parseInt(b);
    res.send(`Product of ${a} and ${b} = ${product}`);
})

app.post("/divide",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const division = Number.parseInt(a) / Number.parseInt(b);
    res.send(`Division of ${a} and ${b} = ${division}`);
})



app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});