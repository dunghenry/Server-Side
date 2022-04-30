const siteController = {
    getHomePage: (req, res) => {
        return res.render('index.hbs', {title: 'Home Page'});
    },
    getAboutPage: (req, res) => {
        return res.render('about.hbs', {title: 'About Page'});
    }
}

module.exports = siteController;