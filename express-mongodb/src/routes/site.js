const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
router.get("/", siteController.getHomePage);
router.get("/about", siteController.getAboutPage);
module.exports = router;
