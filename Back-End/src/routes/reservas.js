const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/reservasMiddleware'));


module.exports = router;