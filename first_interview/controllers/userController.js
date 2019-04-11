const setToken = require('../middleware').set;

const adminLogin = {
  username: 'admin',
  password: 'admin'
};

const User = {
  login(req, res) {
    try {
      if (req.body.username === adminLogin.username && req.body.password === adminLogin.password){
        return res.status(200).json({
          status: 200,
          data: {
            token: setToken({ role: "admin" })
          }
        });
      } else {
        return res.status(401).json({ status: 401, error: 'Username/Password Incorrect' });
      }
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  }
}

module.exports = User;
