const express = require('express');

const app = express();

app.use(express.static('./dist/angular-development-code'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-development-code/'}),
);

app.listen(process.env.PORT || 8080);