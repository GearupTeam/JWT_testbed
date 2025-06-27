const bcrypt = require('bcryptjs');

const users = [
  {
    username: "admin",
    password: bcrypt.hashSync("adminpass", 8),
    role: "admin"
  },
  {
    username: "user1",
    password: bcrypt.hashSync("userpass", 8),
    role: "user"
  }
];

module.exports = { users };