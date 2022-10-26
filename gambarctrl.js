const { db } = require('./db');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload')

var cloudinary = require('cloudinary').v2

cloudinary.config({ 
  cloud_name: 'dpycyvggt', 
  api_key: '763335633772664', 
  api_secret: 'xjjJg0X4DuiKk2knwvJOh5V4FOI' 
});

const getgambar = (req, res) => {
const sqlQuery = "SELECT * FROM image";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

//const addgambar = (req,res) => {
  //  
    //const idimg = req.body.idimg;
    //const gambar = req.file.buffer.toString('base64');

    //console.log()
    
   // const sqlQuery = "INSERT INTO image (idimg,gambar) VALUE (?,?)";
    
    //db.query(sqlQuery, [idimg,gambar], (err, result) => {
      //if (err) {
        //res.send({
          //  message: "error",
            //err
        //})
      //} else {
        //res.send({
          //  message: "YES"
        //})
      //}
    //});

//};
const addgambar = (req,res, next) =>{
  const file = req.files.gambar;
  console.log(file);
  cloudinary.uploader.upload(file.tempFilePath, function(err, result){
   res.send({
    success: true,
    result
   })
  })
}

const uploadGambar = (req, res, next) => {
  const idimg = req.body.idimg;
  const file = req.files.gambar;
  const gambar = file.name;
  const sqlQuery = "INSERT INTO image (idimg,gambar) VALUE (?,?)";
  file.mv('./uploads/' + file.name, function(err, result){
    db.query(sqlQuery, [idimg,gambar], (err, result) => {
    if (err)
    throw err;
    res.send({
      success: true,
      Message: "file uplopaded"
    })
  })
})
}

//const getgambarid = (req, res, next) => {
  //const idimg = req.body.idimg;
  //const sqlQuery = "SELECT * FROM image WHERE idimg = ?";
  //db.query(sqlQuery, idimg, (err, result) => {
    //if (err) {
      //return next(err);
      //console.log(err);
    //} 
    //if (!result.length) {
      //return res.sendStatus (404);
    //}
    //res.sendStatus("content-Type", 'image/jpg/png');
    //res.send(result[0].gambar);
  //});
//};

module.exports = {
    getgambar,
    addgambar,
    //getgambarid,
    uploadGambar,
};