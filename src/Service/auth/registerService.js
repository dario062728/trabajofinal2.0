const UsuarioModel = require("../../models/Usuario.model");
const bcryptjs = require('bcryptjs')
const registeService = async (req,res) => {
    try {
        const { email, password} = req.body;
        console.log(email, password);
        //verificar que el mail no exista 
        const user =  await UsuarioModel.find({email});
        if(user) res.json ({message: "Email registrado ya existe."});

        const hashPassword = bcryptjs.hashSync(password);
        console.log({email: email, password: hashPassword});
        await UsuarioModel.create({email: email, password: hashPassword})
        return {message: "Usuario creado"}

    } catch (error) {
        console.log(error)
    }

}

module.exports = registeService