const jwt = require('jsonwebtoken');
const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.key', 'utf8');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  const decodedHeader = JSON.parse(Buffer.from(token.split('.')[0], 'base64url').toString());
  const alg = decodedHeader.alg;
  const secret = alg === 'HS256' ? publicKey : publicKey;

  jwt.verify(token, secret, { algorithms: [alg] }, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };