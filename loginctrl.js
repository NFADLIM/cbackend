const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { getUsername } = require ("./users.js");  

const login = (req,res) => {
  const body = req.body;
  getUsername(body.username, (err, results)=> {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        data: "Invalid username or password"
      });
    }
    const result = compareSync(body.password, results.password);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, "qwe1234", {
        expiresIn: "1h"
      });
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken
      });
    } else {
      return res.json({
        success: 0,
        data: "Invalid username or password"
      });
    }
  });
  
};

module.exports = {
  login
}