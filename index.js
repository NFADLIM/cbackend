const { db } = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
const fasilitasroute = require ('./fasilitasroute');
const gedungroute = require ('./gedungroute');
const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("demo_image");
app.post("/image", (req, res) => {
  upload(req, res, (err) => {
   if(err) {
     res.status(400).send("Something went wrong!");
   }
   res.send(req.file);
 });
});




app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fasilitasroute);
app.use(gedungroute);

app.listen(3000, () => {
    console.log('server berhasil berjalan pada port 3000!');
  });
 