const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const appPort = 3333

const app = express()

mongoose.connect('mongodb://localhost/devradar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(appPort, () => {console.log(`API running on ${appPort}`)})
