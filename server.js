const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});