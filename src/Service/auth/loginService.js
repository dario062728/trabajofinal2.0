const bcryptjs = require("bcryptjs");
const UsuarioModel = require("../../models/Usuario.model");
const { generarJWT } = require("../../utils/generarJWT");

const loginService = (req, res) => {
    try {
    const { email, password } = req.body;
    //verifica si el usuario existe
    const user = UsuarioModel.find({ email: req.body.email });
    if (!user)
    res.status(404).json({ message: "Email o contraseña invalidos" });
    //verificar la contraseña
    const validatePassword = bcryptjs.compareSync(password, user.password);
    if (!validatePassword)
    res.status(404).json({ message: "Email o contraseña invalidos" });

    //generar el jwt
    const token = generarJWT(email);
    res.json({ user: email, token });
    } catch (error) {
    console.log(error);
}
};

module.exports = loginService;
