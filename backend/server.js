import express from 'express';
import data from './data.js';

const app = express();

//sending data to frontend
app.get('http://localhost:3000/products', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('http://localhost:3000/products', (req, res) => {
  res.send(data.products);
});

//define a route and create a handler
app.get('/', (req, res) => {
  res.send('Server is ready');
});

//set the server port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});