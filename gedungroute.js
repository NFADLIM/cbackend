const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const ctrl = require('./gedungctrl');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, '/uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });


router.get('/gedung/', ctrl.getGedung);
router.get('/gedung/:idGedung', ctrl.getGedungbyid);
router.post('/gedung/', ctrl.addGedung);
router.put('/gedung/', ctrl.updateGedung);
router.delete('/gedung/:idGedung', ctrl.delGedung);
router.put('/gedung/uploads/:idGedung',ctrl.upgambar);

module.exports = router;