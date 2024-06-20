const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mobile_recharge', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a schema and model for the recharge data
const rechargeSchema = new mongoose.Schema({
  phone: String,
  amount: Number
});

const Recharge = mongoose.model('Recharge', rechargeSchema);

// Route to handle form submission
app.post('/recharge', (req, res) => {
  const newRecharge = new Recharge({
    phone: req.body.phone,
    amount: req.body.amount
  });

  newRecharge.save()
    .then(recharge => res.json(recharge))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
