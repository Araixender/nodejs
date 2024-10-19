const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', { result: {fruit: "mango", vegatable: "carrot"} });
});

app.get('/about', (req, res) => {
    res.render('about-us/index', { result: "Aaraiz" });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});