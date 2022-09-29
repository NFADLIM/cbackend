const { db } = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
const fasilitasroute = require ('./fasilitasroute');
const gedungroute = require ('./gedungroute');
const gambarroute = require ('./gambarroute');
const multer = require('multer');






app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fasilitasroute);
app.use(gedungroute);
app.use(gambarroute);
app.listen(3000, () => {
    console.log('server berhasil berjalan pada port 3000!');
  });
 