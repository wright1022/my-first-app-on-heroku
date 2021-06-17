//Install express server
const express = require('express');
const path = require('path');
const app = express();

// Server only are stactic files from the dist directory
app.use(express.static('./dist/my-first-app-on-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-first-app-on-heroku'}),
);

// Tell the app how to start on Heroku
app.listen(process.env.PORT || 8080);

