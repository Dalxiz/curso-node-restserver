const mongoose = require('mongoose');
const { ModuleResolutionKind } = require('typescript');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('conectado a BD');


    } catch (error) {
        console.log(error)
        throw new Error('Error en iniciar la BD');
    }
};


module.exports = {
    dbConnection
}