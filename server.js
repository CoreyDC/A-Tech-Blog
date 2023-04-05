// BRINGING IN PACKAGES
const express = require('express');
const exphbs = require('express-handlebars')
const session = require('express-session')

require('dotenv').config();
const mysql = require('mysql2');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// LISTENING TO PORT
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
  });