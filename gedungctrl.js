const { db } = require('./db');
const fileupload = require('express-fileupload')
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });

const getGedung = (req, res) => {
const sqlQuery = "SELECT * FROM gedung";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const getGedungbyid = (req,res) => {
    const idGedung = req.params.idGedung;
    const sqlQuery = "SELECT * FROM gedung WHERE idGedung = ?";
    db.query(sqlQuery, idGedung, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
};

const addGedung = (req,res, next) => {
    const idGedung = req.body.idGedung;
    const namaGedung = req.body.namaGedung;
    const linkTour = req.body.linkTour;
    const penjelasan = req.body.penjelasan;
    const gambar = req.body.gambar
    
    const sqlQuery = "INSERT INTO gedung (idGedung, namaGedung, penjelasan, linkTour, gambar) VALUE (?, ?, ?, ?, ?)";
      db.query(sqlQuery, [idGedung, namaGedung, penjelasan,linkTour, gambar], (err, result) =>{
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log(result);
        }
    
  })
    }

const updateGedung = (req, res) => {
    const namaGedung = req.body.namaGedung;
    const idGedung = req.params.idGedung;
    const linkTour = req.body.linkTour;
    const penjelasan = req.body.penjelasan;
    const gambar = req.body.gambar;
    
    const sqlQuery = " UPDATE gedung SET namaGedung = ?, linkTour = ?, penjelasan = ?, gambar = ? WHERE idGedung =?";

    db.query(sqlQuery, [namaGedung, linkTour,penjelasan, gambar, idGedung], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
};

const delGedung = (req, res) => {
    const idGedung = req.params.idGedung;

    const sqlQuery = "DELETE FROM gedung WHERE idGedung = ?";
    db.query(sqlQuery, idGedung, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
};

const upgambar = (req, res) => {
  const idGedung = req.params.idGedung;
  const gambar = req.file;
  const fileType = gambar.mimetype.split(('/')[1]);
  let newFileName = gambar.filename + "." + filetype;

  fs.rename(
    './uploads/${gambar.filename}',
    './uploads/${newFileName}',
    function (){
      console.log("file renamed n uploaded");
    }
  );
  console.log (gambar);
  console.log ("filenName", newFileName);

  db.query(
    "UPDATE gedung SET gambar = ? WHERE idGedung = ?",
    [newFileName, idGedung],
    (err, result) => {
      console.log(err);
      res.json({result});
    }

  );
};
module.exports = {
    getGedung,
    getGedungbyid,
    addGedung,
    updateGedung,
    delGedung,
    upgambar,
};