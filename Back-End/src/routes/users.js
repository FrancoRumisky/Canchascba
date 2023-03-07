const { Router } = require("express");
const UserController = require("../controllers/userController");

const router = Router();

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) return res.status(400).send("no id provided");
  
    try {
      const user = await UserController.findById(id);
  
      if (!user) return res.status(404).json({ error: "Not found" });
  
      return res.status(200).json(user);
    } catch (error) {
      console.error("GET /users/:id UserController.findById error");
      next(error);
    }
  });

router.post("")
  
  module.exports = router;