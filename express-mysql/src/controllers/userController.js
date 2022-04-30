const connection = require('../configs/connectDB');

const homeController = {
    getUsers: async (req, res) => {
        console.log(connection)
        return res.render('user.ejs', {url: req.url});
    }
}

module.exports = homeController;