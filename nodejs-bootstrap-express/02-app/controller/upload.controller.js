// var express = require('express');
// const fileUpload = require('express-fileupload');
// var app = express();

// app.use(fileUpload());
// app.post('/upload', function (req, res) {
//     if (!req.files) {
//         return res.status(400).send('No files were uploaded.');
//     } else {
//         let sampleFile = req.files.sampleFile;

//         sampleFile.mv(path.join(__dirname, 'public/uploadfile', sampleFile.name), function (err) {
//             if (err)
//                 return res.status(500).send(err);

//             res.send('Uploaded Success');
//         });
//     }
// });

var express = require('express');

exports.render = function (req, res, next) {
    res.render('index', {
        'title': 'Test Upload',
        'message':'ปุ่ม Upload ไปไหน'
    });
};