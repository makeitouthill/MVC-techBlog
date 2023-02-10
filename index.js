const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ defaultLayout: 'main' });
const homeRoutes = require('./controllers/homeRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes');
const loginRoutes = require('./controllers/loginRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/login', loginRoutes);

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {console.log('Server listening on: http://localhost:' + PORT);
    })
// });
  