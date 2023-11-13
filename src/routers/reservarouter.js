const express = require('express');
const router = express.Router();
const reservacontroller = require('../controllers/reservacontroller');

router.post('/crearReserva', reservacontroller.crearReserva);
router.get('/listarReserva', reservacontroller.listarReserva);
router.put('/actualizarReserva/:idReserva', reservacontroller.actualizarReserva);
router.delete('/desactivarReserva/:idReserva', reservacontroller.desactivarReserva);

module.exports = router;
