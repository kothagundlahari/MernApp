const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Body Parser middleware
app.use(bodyParser.json());


const port = process.env.PORT || 5000;
const db= require('./config/key').mongoURI;
const items = require('./routes/api/items');
mongoose
    .connect(db)
    .then(() => console.log(`connected to db`))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items);


app.listen(port,() => {
   console.log(`Listening to the port ${port}`);
});



