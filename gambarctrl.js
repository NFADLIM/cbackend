const { db } = require('./db');
const bodyParser = require('body-parser');


const getgambar = (req, res) => {
const sqlQuery = "SELECT * FROM gambar";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const addgambar = async(req,res) => {
    
    const idimg = req.body.idimg;
    const gambar = req.file.gambar;

    console.log()
    
    const sqlQuery = "INSERT INTO image (idimg,gambar) VALUE (?, ?)";
    
    db.query(sqlQuery, [idimg,gambar], (err, result) => {
      if (err) {
        res.send({
            message: "error",
            err
        })
      } else {
        res.send({
            message: "YES"
        })
      }
    });

};
module.exports = {
    getgambar,
    addgambar,
};