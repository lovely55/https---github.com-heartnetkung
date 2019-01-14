var express = require('express');
var auth = require('express-basic-auth')
var path = require('path');
var createError = require('http-errors');
const fileUpload = require('express-fileupload');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));


// Authentication module.
app.use(auth({
    users: {
        'ying': 'ying0311'
    },
    challenge: true,
    realm: 'test',
}));


app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Okay');
});
app.get('/', (req, res) => {
    res.send(`Hello from express - ${req.user}!`);
});


app.use(fileUpload());
app.post('/upload', function (req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    } else {
        let sampleFile = req.files.sampleFile;

        sampleFile.mv(path.join(__dirname, 'public/uploadfile', sampleFile.name), function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('Uploaded Success');
        });
    }
});

// handle http error 404
app.use(function (req, res, next) {
    next(createError(404));
});


app.listen(3000);
console.log('Okay ~>Hi<~');