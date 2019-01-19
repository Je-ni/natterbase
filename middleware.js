//This file constains functions for setting and authenticating roles

const jwt = require('jsonwebtoken');

const secret = 'tempSecret';

const token = {
  set(payload) {
    const tokenTime = 60 * 60 * 24 * 30; // expires in 30 days
    const token = jwt.sign(payload, secret, {
      expiresIn: tokenTime
    });
    return token;
  },
  // this checks the jwt token
  authorize(req, res, next) {
    try {
      const accessToken = req.body.token || req.query.token || req.headers['x-access-token'];
      const data = jwt.verify(accessToken, secret);
      req.userData = data;
      if (!data.role) return res.status(401).json({ status: 401, error: 'user auth failed' });
      next();
    } catch (error) {
      return res.status(401).json({ status: 401, error: 'user auth failed' });
    }
  }
}

module.exports = token;

