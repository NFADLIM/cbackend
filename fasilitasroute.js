const express = require('express');
const router = express.Router();
const ctrl = require('./fasilitasctrl');



router.get('/fasilitas/lists', ctrl.getFasilitasjoin);
router.get('/fasilitas/list', ctrl.getFasilitas);
router.get('/fasilitas/:idFasilitas', ctrl.getFasilitasid);
router.post('/fasilitas/add', ctrl.addFasilitas);
router.put('/fasilitas/update/:idFasilitas', ctrl.updateFasilitas);
router.delete('/fasilitas/delete/:idFasilitas', ctrl.delFasilitas);

module.exports = router;