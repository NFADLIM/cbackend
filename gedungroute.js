const express = require('express');
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ctrl = require('./gedungctrl');
const path = require('path');
const fileupload = require('express-fileupload');


router.use(fileupload({
  useTempFiles: true
}));



router.get('/gedung/list', ctrl.getGedung);
router.get('/gedung/:idGedung', ctrl.getGedungbyid);
router.post('/gedung/add', ctrl.addGedung);
router.put('/gedung/update/:idGedung', ctrl.updateGedung);
router.delete('/gedung/delete/:idGedung', ctrl.delGedung);
router.put('/gedung/uploads/:idGedung',ctrl.upgambar);

module.exports = router;

//var cloudinary = require('cloudinary').v2