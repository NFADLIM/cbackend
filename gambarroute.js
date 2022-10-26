const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { db } = require('./db');
const ctrl = require('./gambarctrl');
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

//const upload = multer({ storange:multer.memoryStorage()});
router.post('/image', ctrl.addgambar);
router.post('/image/db', ctrl.uploadGambar);
router.use('/gambar', express.static('uploads/gambar'));
router.get('/image/display', ctrl.getgambar)
//router.post('/image', upload.single('gambar') ,ctrl.addgambar)
//router.get("/image/display/:id", ctrl.getgambarid)
router.get("/image/display/:id", (req, res, next) => {
    db.query(
      "SELECT `gambar` FROM `image` WHERE `idimg` = ?",
      [req.params.id],
      (err, results) => {
        if (err) {
          return next(err);
        }
  
        if (!results.length) {
          return res.sendStatus(404);
        }
  
        // set the appropriate content type
        res.set("Content-Type", "image/jpg");
        res.send(results[0].gambar);
      }
    );
  });

  function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
router.use(errHandler);
module.exports = router;
//route gambar pake multer
// error di sql
// mencari solusi
// code name impact
// note cari tutorial lagi
