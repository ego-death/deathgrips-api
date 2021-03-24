const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const obj = require('./gripsalbums.js')

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.use(cors());

app.get('/api/grips/:albumName', (req, res)=>{
    const album = req.params.albumName.toLowerCase();
    console.log(album);
    if(!obj[album]){
        res.json(obj['unknown']);
    }
    else{
        res.json(obj[album]);
    }
});

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log('Listening at ' + PORT);
});