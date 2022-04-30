const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const {engine} = require("express-handlebars");
const bodyParser = require('body-parser');
dotenv.config();
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}
const connectDB = require('./configs/connectDB');
const route = require('./routes');
const port = process.env.PORT || 4000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.engine("hbs", engine({extname: ".hbs"}));
app.set("view engine", "hbs");
app.set("views", './src/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(helmet());
connectDB();
route(app);
app.listen(port, () => console.log(`App started on http://localhost:${port}`));
