const { registerService } = require("../services");

const register = async (req, res) => {
    try {
        const data = req.body
        const response = await registerService.register(data.email, data.password, data.username)
        res.status(201).json(response);
    } catch (error) {
        throw error
    }
}
module.exports = { register }
