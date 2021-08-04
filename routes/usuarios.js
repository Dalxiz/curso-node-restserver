const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
    usuariosPut
} = require('../controller/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    check('password', 'Password es obligatorio y contener 6 letras').isLength({ min: 6 }),
    check('correo', 'el correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/:id', [
    check('id', 'ID no es valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);

router.put('/:id', [
    check('id', 'ID no es valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut);



module.exports = router;