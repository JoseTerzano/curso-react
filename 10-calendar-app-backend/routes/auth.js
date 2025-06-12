/* 
    Rutas de Usuarios / Auth
    /api/auth

*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post('/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ] 
    , crearUsuario);

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ]
    , loginUsuario);

router.get('/renew', validarJWT ,revalidarToken);//El objetivo del renew es que si lo llamamos verifica el JWT y devuelve otro


module.exports = router;