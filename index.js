const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', () => {
    console.log('Está vivo!!');
})

app.listen(PORT, () => {
    console.log(`Estou na portinha ${PORT}`);
});