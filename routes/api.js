const router = require('express').Router();

//const middlewares = require('./middlewares');
const apiUrlsRouter = require('./api/urls');


router.use('/urls',apiUrlsRouter);
//router.use('/urls',middlewares.checkToken,apiUrlsRouter);


module.exports = router;