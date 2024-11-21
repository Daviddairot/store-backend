const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require('./db/connect.js')
require('dotenv').config()
require('express-async-errors')
const productsroutes = require('./routes/products')
// const auth = require('./controllers/auth')
const path = require('path');


// Middleware to parse JSON request bodies
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static files
app.use('/media', express.static(path.join(__dirname, 'media')));


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


app.get('/', (req, res) => {
res.send('<h1>store API</h1><a href="/api/store/products">products route</a>');
})

app.use('/api/store/products', productsroutes)
// app.use('/api/v1/authentication', auth)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      console.log('Connected to MongoDB successfully');
      app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    } 
  };

start();