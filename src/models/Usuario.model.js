const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema ({
    email: {type: String, unique: true},
    password: {type: String}
})

const UsuarioModel = model("Usuario", UsuarioSchema);

module.exports = UsuarioModel;