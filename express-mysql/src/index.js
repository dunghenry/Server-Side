const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const routes = require('./routes');
const port = process.env.PORT || 4000;
const app = express();
//Config view engine and static file
app.set('view engine', 'ejs');
app.set('views', "./src/views/pages");
app.use(express.static('./src/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("combined"));
app.use('/', routes);
// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })
app.listen(port, () => console.log(`App started on http://localhost:${port}`));
