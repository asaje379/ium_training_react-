const express = require('express');
const cors = require('cors');
const connection = require('./config/db.config');
const uploadMiddleware = require('./multer.config');

const app = express();

connection.connect();

app.use(cors());
app.use(express.json());

app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'));

app.post('/upload', uploadMiddleware(), (req, res) => {
    const path = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    console.log(path)
    res.status(200).json({
        fileURL: path
    });
});

app.get('/todos', (req, res) => {
    console.log(req);
    res.send('Super, tout va bien !');
});


app.listen(7000);