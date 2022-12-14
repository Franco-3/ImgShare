const path = require('path');
const { execPath } = require('process');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');

module.exports = app => {

    //settings
    app.set('port', process.env.PORT || 3001);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }))
    app.set('view engine', '.hbs');

    //middlewares
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}));

    //routes

    //errorhandlers


    return app;
}