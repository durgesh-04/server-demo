const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

const upload = multer({
dest: 'images',
limits: {
fileSize: 1000000,
},
fileFilter(req, file, cb) {
if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
cb(new Error('Please upload an image.'))
}
cb(undefined, true)
}
})

image: {
type: Buffer
}

let spy = {
	up : "False",
	down : "False",
	left : "False",
	right : "False",
	speed : "4"
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

app.post('/stream', upload.single('upload'), (req, res) => {
res.send()
})

router.post('/stream', upload.single('upload'), async (req, res) => {
try {
const incident = await Incident.findById(req.body.id)
incident.image = req.file.buffer
incident.save()
res.send()
} catch (e){
res.status(400).send(e)
}
}, (error, req, res, next) => {
res.status(400).send({error: error.message})
})

router.delete('/upload', async (req, res) => {
try {
const incident = await Incident.findById(req.body.id)
incident.image = undefined
incident.save()
res.send()
} catch (e) {
res.status(400).send(e)
}
})

router.get('/:id/image', async (req, res) => {
try{
const incident = await Incident.findById(req.params.id)
if (!incident || !incident.image) {
throw new Error()
}
//response header, use set
res.set('Content-Type', 'image/png')
res.send(incident.image)
} catch(e) {
res.status(404).send()
}
})

app.listen(process.env.PORT || 4000);
