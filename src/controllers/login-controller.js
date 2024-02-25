const {loginService}  = require('../services/index')
const signIn = async (req, res) => {
    try {
      console.log(req.body);
  
      const resp = await loginService.signIn(req.body);
  
      res.status(200).json(resp);
    } catch (error) {
  
      res.status(500).json({ error: error });
    }
}
module.exports = {signIn}