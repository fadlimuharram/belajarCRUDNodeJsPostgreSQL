const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');

const queries = require('./queries');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();

});


app.get('/api/mahasiswa',queries.getallMahasiswa);
app.post('/api/mahasiswa',queries.createMahasiswa);
app.put('/api/mahasiswa',queries.editMahasiswa);
app.delete('/api/mahasiswa/:id',queries.deleteMahasiswa);

server.listen(port,()=>{
    console.log(`Start pada port : ${port}`);
});