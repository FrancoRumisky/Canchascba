const { Router } = require("express");

const router = Router();

router.use(require("../middlewares/userMiddleware"));

module.exports = router;
