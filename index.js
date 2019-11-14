const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Homepage'
    });
})

const server = app.listen(9001, () => {
    console.log(`Express running on Port ${server.address().port}`)
});