const express = require('express');
const config = require('./config');
const routers = require('./routers');

const app = express();

app.use(routers);

app.listen(config.port, config.host, () => console.log(`Express server started on ${config.host}:${config.port}`))
