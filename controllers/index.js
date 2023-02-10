const express = require('express');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/homepage', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);

module.exports = router;