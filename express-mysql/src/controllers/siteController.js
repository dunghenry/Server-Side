const siteController = {
    getAboutPage: async (req, res) => {
        return res.render('about.ejs', {
            url: req.url
        });
    },
    getHomePage: async (req, res) => {
        return res.render('index.ejs', {
            url: req.url
        });
    },
    getContactPage: async (req, res) => {
        return res.render('contact.ejs', { url: req.url });
    },
    getUploadFile: async (req, res) => {
        return res.render('uploadFile.ejs', { url: req.url });
    },
    pageNotFound: async (req, res) => {
        return res.render('pageNotFound.ejs', { url: req.url });
    }
}

module.exports = siteController;