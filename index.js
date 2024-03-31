const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.get('/', (req, res) => {
    res.senDFile(path.join(__dirname, '/index.html'));
});

app.get('/pizza', (req, res) => {
    res.sendFile(path.join(__dirname, './recipes/Pizza.html'));
});

app.get('/bread', (req, res) => {
    res.sendFile(path.join(__dirname, './recipes/Banana_Bread.html'));
});

app.get('/salmon', (req, res) => {
    res.sendFile(path.join(__dirname, './recipes/Salmon.html'));
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
