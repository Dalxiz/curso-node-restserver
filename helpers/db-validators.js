const Role = require('../models/rol');
const Usuario = require('../models/usuario');



const esRolValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`el rol ${rol} no esta establecido en BD`);
    }

};

const emailExiste = async(correo = '') => {
    //verificar si correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo}, ya esta registrado`);
    }
};

const existeUsuarioPorId = async(id = '') => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El Id ${id}, no exite`);
    }
};


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
};