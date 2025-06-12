/* 
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();
// Validar Todas por JWT
router.use(validarJWT) 
// poniendo esto es lo mismo que decir que cualquier peticion use validarJWT.
// Todo lo que este debajo lo tendra

// Obtener eventos
router.get('/', getEventos);

// Crear Evento
router.post('/',[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio obligatoria').custom( isDate ),
    check('end', 'Fecha de fin obligatoria').custom( isDate ),
    validarCampos
],
    crearEvento);

// Actualizar Evento
router.put('/:id', [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ], actualizarEvento);

// Borrar Evento
router.delete('/:id',eliminarEvento);

module.exports = router;