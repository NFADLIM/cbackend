const {db} = require('./db.js');
const jwt = require ('jsonwebtoken');


const getUsername = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlQuery = "SELECT * FROM users  WHERE username = ? AND password = ?";
  
    db.query(sqlQuery,[username, password], (err, result) => {
      if (err) {
        console.log(err);
        console.log ("not found");
      } else {

        res.send(result);
        console.log(result);
      };
    });
  };

  function verifyToken(req, res, next) {
    const bearerHeader = req.header['auth'];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    }else{
      res.sendStatus (403);
    }
  };

module.exports = {
  getUsername,
  verifyToken
};