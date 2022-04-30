const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");
router.get('/', siteController.getHomePage);
router.get('/about', siteController.getAboutPage);
router.get('/contact', siteController.getContactPage);
router.get('/upload-file', siteController.getUploadFile);
router.get('*', siteController.pageNotFound);
module.exports = router;