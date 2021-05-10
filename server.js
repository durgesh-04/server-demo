const express = require('express');
const cors = require('cors');
const app = express();


let spy = {
	
}

let temp;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
	res.send("server working");
})

app.post('/values', (req,res)=>{
	spy = req.body;
	console.log(spy)
	res.send("got values");
})

app.get('/values', (req,res)=>{
	res.send(spy);
})

app.post('/t', (req,res)=>{
	temp = req.body.temp;
})

app.get('/temp',(req,res)=>{
	res.send(t);
})


app.listen(process.env.PORT || 4000);
