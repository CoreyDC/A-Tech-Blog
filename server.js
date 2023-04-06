// BRINGING IN PACKAGES
const express = require('express');
const exphbs = require('express-handlebars')
const session = require('express-session')

require('dotenv').config();
const mysql = require('mysql2');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

// BRINGING IN HELPERS AND ROUTES
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { log } = require('console');

const app = express();
const PORT = process.env.PORT || 3001;

// SET UP HANDLEBARS.JS ENGINE WITH CUSTOM HELPERS
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// INFORM EXPRESS.JS WHICH TEMPLATE ENGINE TO USE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')))

// LISTENING TO PORT
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
  });