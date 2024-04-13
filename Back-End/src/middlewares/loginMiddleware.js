const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserController = require("../controllers/userController");

const secret = process.env.SECRET;
const router = Router();

router.post("/", async (req, res, next) => {
  const { user, pass } = req.body;

  if (!user || !pass)
    return res.status(400).send("Username and password are required");

  try {
    const userLog = await UserController.findByUserAndPass(user, pass);

    if (!userLog)
      return res.status(404).json({ error: "Email or Password wrong" });

    const { id: sub, nombre: name, RolUsuarioId: rol } = userLog;

    const token = jwt.sign(
      {
        sub,
        name,
        rol,
        exp: Date.now() + 3600000,
      },
      secret
    );
    res.cookie("jwt", token);

    return res
      .status(200)
      .json({ ok: true, data: userLog, message: "Inicio de sesion exitoso" });
  } catch (error) {
    console.error(
      "GET /users/LoginUser UserController.findByUserAndPass error"
    );
    next(error);
  }
});

router.get("/public", (req, res) => {
  return res.status(200).json({ message: "You have access" });
});

router.get("/private", (req, res) => {
  try {
    const tooken = req.cookies;
    console.log(tooken);
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }
    return res.status(200).json({ payload });
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
});

module.exports = router;
