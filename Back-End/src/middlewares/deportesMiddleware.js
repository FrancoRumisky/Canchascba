const { Router } = require("express");
const SportsController = require("../controllers/sportsController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const sports = await SportsController.findAllSports();
    if (sports.length < 0) return res.status(404).json({ error: "Not found" });

    return res.status(200).json(sports);
  } catch (err) {
    console.error("GET /users SportsController.findAllSports error");
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("no id provided");

  try {
    const user = await SportsController.findById(id);

    if (!user) return res.status(404).json({ error: "Not found" });

    return res.status(200).json(user);
  } catch (error) {
    console.error("GET /users/:id SportsController.findById error");
    next(error);
  }
});

module.exports = router;
