const loginService = require("../../Service/auth/loginService");

const loginController = (req, res) => {
    const login = loginService(req);
    res.json(login)
};

const registerController = async ( req, res) => {
    const register = await registerService(req, res);
    res.json({register})
}
module.exports = {authController, registerController}