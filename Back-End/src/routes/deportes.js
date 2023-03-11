const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/deportesMiddleware.js'));


module.exports = router;