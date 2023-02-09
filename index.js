const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/homeRoutes'));


app.use(routes);

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {console.log('Server listening on: http://localhost:' + PORT);
    })
// });
  