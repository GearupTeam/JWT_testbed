const express = require('express');
const { users } = require('../utils/db');

const router = express.Router();

router.post('/add', (req, res) => {
  const { username, password, role } = req.body;

  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Only admin can add users" });
  }

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password, role });
  res.json({ message: "User added" });
});

router.post('/delete', (req, res) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Only admin can delete users" });
  }

  const index = users.findIndex(u => u.username === req.body.username);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

module.exports = router;
