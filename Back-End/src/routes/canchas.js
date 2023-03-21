const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/canchasMiddleware'));


module.exports = router;