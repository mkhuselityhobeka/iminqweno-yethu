const express = require('express');

const app = express();

app.use(express.static('./dist/funda-registration-front-end'));

app.get('/*', (req, res) =>
    res.sendFile('app/home-page/home-page.component.html', {root: 'dist/FundaRegistration-Front-End/'}),
);

app.listen(process.env.PORT || 8080);
