const express = require('express');
const app = express();

const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', require('./routes/index'));

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

app.get('/', (req, res) => res.send('Hello World with Express'));