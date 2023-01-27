const { db } = require('./db');

const getFasilitas = (req, res) => {
const sqlQuery = "SELECT * FROM gedung JOIN fasilitas WHERE gedung.idGedung = fasilitas.idGedung";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const getFasilitasid = (req,res) => {
    const idFasilitas = req.params.idFasilitas;
    const sqlQuery = "SELECT * FROM fasilitas WHERE idFasilitas = ?";
    db.query(sqlQuery, idFasilitas, (err, result) => {
      if (err) {
        console.log(err);
        console.log("gk ada");
      } else {
        res.send(result);
        console.log(result);
      }
    });
};

const addFasilitas = (req,res) => {
    const idFasilitas = req.body.idFasilitas;
    const idGedung = req.body.idGedung;
    const namaFasilitas = req.body.namaFasilitas;
    const linkTour = req.body.linkTour;
    const penjelasan = req.body.penjelasan;
    
    const sqlQuery = "INSERT INTO fasilitas (idFasilitas,idGedung, namaFasilitas, linkTour, penjelasan) VALUE (?,?, ?, ?, ?)";
    
    db.query(sqlQuery, [idFasilitas, idGedung, namaFasilitas, linkTour,penjelasan], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });

};

const updateFasilitas = (req, res) => {
  const idFasilitas = req.params.idFasilitas;  
  const idGedung = req.body.idGedung;
    const namaFasilitas = req.body.namaFasilitas;
    const linkTour = req.body.linkTour;
    const penjelasan = req.body.penjelasan;
    
    const sqlQuery = " UPDATE fasilitas SET idGedung = ?, namaFasilitas = ?, linkTour = ?, penjelasan = ? WHERE idFasilitas = ?";
    
    db.query(sqlQuery, [idGedung, namaFasilitas, linkTour,penjelasan, idFasilitas], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
};

const delFasilitas = (req, res) => {
    const idFasilitas = req.params.idFasilitas;

    const sqlQuery = "DELETE FROM fasilitas WHERE idFasilitas = ?";
    db.query(sqlQuery, idFasilitas, (err, result) => {
      if (err) {
        console.log(err );
      } else {
        res.send(result);
        console.log(result + "file deleted");
      }
    });
};

module.exports = {
    getFasilitas,
    getFasilitasid,
    addFasilitas,
    updateFasilitas,
    delFasilitas,
};