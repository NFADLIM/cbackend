const { db } = require('./db');

const getFasilitasjoin = (req, res) => {
const sqlQuery = "SELECT * FROM fasilitas JOIN gedung WHERE gedung.idGedung = fasilitas.idGedung";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const getFasilitas = (req, res) => {
  const sqlQuery = "SELECT * FROM fasilitas";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
}

const getFasilitasid = (req,res) => {
    const idFasilitas = req.params.idFasilitas;
    const sqlQuery = "SELECT * FROM fasilitas WHERE idFasilitas = ?";
    db.query(sqlQuery, idFasilitas, (err, result) => {
      if (err || !result.length) {
        console.log(err);
        console.log("gk ada");
      } else {
        res.send(result[0]);
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
    const gambar = req.body.gambar;
    
    const sqlQuery = "INSERT INTO fasilitas (idFasilitas,idGedung, namaFasilitas, linkTour, penjelasan, gambar) VALUE (?,?, ?, ?, ?, ?)";
    
    db.query(sqlQuery, [idFasilitas, idGedung, namaFasilitas, linkTour,penjelasan,gambar], (err, result) => {
      if (err) {
        res.status(422).send('Failed to create')
        console.log(err)
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
  const linkTour = req.body.linkTour || 'LinkTour';
  const penjelasan = req.body.penjelasan;
  const gambar = req.body.gambar;

    
    const sqlQuery = " UPDATE fasilitas SET idGedung = ?, namaFasilitas = ?, linkTour = ?, penjelasan = ?, gambar = ? WHERE idFasilitas = ?";
    
    db.query(sqlQuery, [idGedung, namaFasilitas, linkTour,penjelasan,gambar, idFasilitas], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
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
    getFasilitasjoin,
    getFasilitasid,
    addFasilitas,
    updateFasilitas,
    delFasilitas,
};