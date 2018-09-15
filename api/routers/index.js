const {Router} = require('express');
const statusRouter = require('./status');

const indexRouter = new Router();

indexRouter.use('/status', statusRouter);

module.exports = indexRouter;