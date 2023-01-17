<<<<<<< HEAD
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./Home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
=======
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> 4d6c40984a7d9b85e74a4e1956a35389f21e8f00
