const { db } = require('./db');

const getakun = (req, res) => {
const sqlQuery = "SELECT * FROM users";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const updateakun = (req, res) => {
    const idFasilitas = req.params.idFasilitas;  
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
      
      const sqlQuery = " UPDATE users SET username = ?, email = ?, password = ? WHERE id = 1";
      
      db.query(sqlQuery, [username, email, password idFasilitas], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
  };

  module.exports = {
    getakun,
    updateakun
  }