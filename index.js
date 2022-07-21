const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.send('Está vivoooo!!');
});

app.listen(port, () => {
    console.log(`Estou na portinha ${port}`);
});
