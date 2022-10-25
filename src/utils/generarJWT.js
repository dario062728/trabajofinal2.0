const jwt = require ('jsonwebtoken')
require('dotenv').config();

const generarJWT = (email) => {
    const payload = { email};
    jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4h'})
}

module.exports = { generarJWT}
