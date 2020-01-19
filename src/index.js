const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes')
const { setupWebsocket } = require('./websocket');

const appPort = 3333

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb://localhost/devradar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(appPort, () => {console.log(`API running on ${appPort}`)})
