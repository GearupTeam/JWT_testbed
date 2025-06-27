const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const { users } = require('../utils/db');

const router = express.Router();
const privateKey = fs.readFileSync('./keys/private.key', 'utf8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf8');

router.post('/login', (req, res) => {
  const { username, password, alg = "RS256", kid = "test" } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const secret = alg === 'RS256' ? privateKey : publicKey;

  const token = jwt.sign(
    { username: user.username, role: user.role },
    secret,
    {
      algorithm: alg,
      header: { alg, kid }
    }
  );

  res.json({ token });
});

module.exports = router;
