const express = require('express');
const router = express.Router();
const ctrl = require('./fasilitasctrl');



router.get('/fasilitas/', ctrl.getFasilitas);
router.get('/fasilitas/:idFasilitas', ctrl.getFasilitasid);
router.post('/fasilitas/', ctrl.addFasilitas);
router.put('/fasilitas/', ctrl.updateFasilitas);
router.delete('/fasilitas/:idFasilitas', ctrl.delFasilitas);

module.exports = router;