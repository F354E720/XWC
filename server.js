var fs = require("fs");
const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // Express layouts
const favicon = require('serve-favicon');
const app = express();
const path = require('path');
const serverless = require('serverless-http');
const {PythonShell} = require('python-shell');  

// Listen to a specific port OR :3000:
const configPort = (process.env.PORT || 3000);

// Listen:
app.listen(configPort, console.log(`Server started on ${configPort}`));

const router = express.Router();

app.set('view engine', 'ejs'); // Use EJS View Engine
app.set('views', path.join(__dirname, '/views')); // Directory for views:

router.get('/', (request, response) => {
    response.render('index');
});

router.get('/index', (request, response) => {
    response.render('index');
});

router.get('/robots.txt', (request, response) => { // https://stackoverflow.com/a/20265155
    response.type('text/plain');
    response.sendFile('robots.txt', { root: __dirname });
});

router.get('*', (request, response) => { // https://stackoverflow.com/a/6528951
    response.sendFile('/static/html/50x.html', { root: __dirname }); // https://stackoverflow.com/a/26079640
});

app.use(favicon(path.join(__dirname, 'static', 'img', 'favicon.ico.png')));

// Set the static route:
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/.netlify/functions/server', router);

// EJS (Embedded JavaScript):
app.use(expressLayouts); // Use the Express Layouts

module.exports = app;
module.exports.handler = serverless(app);