const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/empresasMiddleware'));


module.exports = router;