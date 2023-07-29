const express = require('express')
const routes = require('./routes');
const { MongoClient } = require('mongodb');
const config = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./model/post');
const app = express();
const PORT =  process.env.PORT || 8000

async function connectToDB() {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      // Select the database (if not using the MongoDB URI)
      // const db = client.db('your_database_name');
  
      // You are now connected to MongoDB!
      console.log('Connected to MongoDB.');
  
      // Perform your database operations here...
  
      // Don't forget to close the connection when you are done with it
      client.close();
      console.log('Disconnected from MongoDB.');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }
connectToDB();


mongoose
  .connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT , ()=> console.log(`server start on port ${PORT}`))