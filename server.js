const express = require('express');
const cors = require('cors');

const app = express();


let spy = {
	up : "vbvnv",
	down : "",
	left : "",
	right :""
}

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
	res.send("heaasgascack");
})

app.post('/values', (req,res)=>{
	spy = req.body;
	console.log(spy)
	res.send("going up 3");
})

app.get('/values', (req,res)=>{
	res.send(spy);
})

app.listen(4000);
