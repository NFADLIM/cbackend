const express = require('express');
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ctrl = require('./gedungctrl');
const path = require('path');
const fileupload = require('express-fileupload');
var cloudinary = require('cloudinary').v2

router.use(fileupload({
  useTempFiles: true
}));

cloudinary.config({ 
  cloud_name: 'dpycyvggt', 
  api_key: '763335633772664', 
  api_secret: 'xjjJg0X4DuiKk2knwvJOh5V4FOI' 
});

//const storage = multer.diskStorage({
  //  destination: function(req, file, callback) {
    //  callback(null, '/uploads');
    //},
    //filename: function (req, file, callback) {
      //callback(null, file.fieldname);
   // }
  //}); 
  // router.get (/gedung, ctr.get agedung)
  // hdfuiasud u
 /* const storange = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const uploads = multer({
    storange: storange
})
*/

router.get('/gedung/', ctrl.getGedung);
router.get('/gedung/:idGedung', ctrl.getGedungbyid);
router.post('/gedung', ctrl.addGedung);
router.put('/gedung/', ctrl.updateGedung);
router.delete('/gedung/:idGedung', ctrl.delGedung);
router.put('/gedung/uploads/:idGedung',ctrl.upgambar);

module.exports = router;