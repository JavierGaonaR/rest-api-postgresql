const express = require('express');
var cors = require('cors')

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', require('./routes/index'));

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

app.get('/', (req, res) => res.send('Hello World with Express'));