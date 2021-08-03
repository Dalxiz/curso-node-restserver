const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPatch, usuariosDelete, usuariosPut } = require('../controller/usuarios');
const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

router.put('/:id', usuariosPut);



module.exports = router;