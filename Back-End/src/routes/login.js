const { Router } = require("express");

const router = Router();

router.use(require("../middlewares/loginMiddleware"));

module.exports = router;
