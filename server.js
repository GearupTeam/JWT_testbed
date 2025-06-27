const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const { authenticateToken } = require('./utils/middleware');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/auth', authRoutes);
app.use('/admin', authenticateToken, adminRoutes);

app.listen(3000, () => {
  console.log('Vulnerable JWT testbed running at http://localhost:3000');
});