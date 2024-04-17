const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserController = require("../controllers/userController");
const { transporter } = require("../controllers/mailer");

const secret = process.env.SECRET;
const secretReset = process.env.SECRET_RESET;
const router = Router();

router.post("/", async (req, res, next) => {
  const { user, pass } = req.body;

  if (!user || !pass)
    return res
      .status(400)
      .json({ error: "Username and password are required" });

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

router.put("/change-password", async (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(400).json({ error: "Email is required" });
  }
  const message = "Te enviamos un link a tu correo electronico";
  let verificationToken;
  let emailStatus = "ok";

  try {
    const userP = await UserController.findUser(user);
    const { id, email } = userP;
    const token = jwt.sign({ id, email }, secretReset, { expiresIn: "10m" });
    verificationToken = token;
    await UserController.setUserResetToken(id, token);
  } catch (error) {
    emailStatus = error;
    return res.status(401).json({ error: "user not found" });
  }

  //TODO: sendEmail
  try {
    await transporter.sendMail({
      from: '"Forgot password" <framqoo@gmail.com>',
      to: user,
      subject: "Forgot password",
      html: `<b>Ingrese el siguiente token para recuperar su contraseña ${verificationToken}</b>`,
    });
  } catch (error) {
    emailStatus = error;
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message, info: emailStatus });
});

router.put("/new-password", async (req, res) => {
  const { newPassword } = req.body;
  const resetToken = req.headers.reset;

  if (!(resetToken && newPassword)) {
    res.status(400).json({ error: "all fields are required" });
  }

  let jwtPayload;
  

  try {
    jwtPayload = jwt.verify(resetToken, secretReset);
    // if (Date.now() > jwtPayload.exp) {
    //   return res.status(401).send({ error: "token expired" });
    // }
    console.log(jwtPayload.exp);
    console.log(Date.now());
    await UserController.setNewUserPassword(resetToken, newPassword);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
  res.json({ message: "password changed" });
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
