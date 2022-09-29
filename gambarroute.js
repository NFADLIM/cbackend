const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ctrl = require('./gambarctrl');

const storange = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const uploads = multer({
    storange: storange
})

router.get('/image/display', ctrl.getgambar)
router.post('/image',uploads.single('gambar'), ctrl.addgambar)

module.exports = router;