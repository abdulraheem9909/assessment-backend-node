const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
