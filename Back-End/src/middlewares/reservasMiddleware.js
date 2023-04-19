const { Router } = require("express");
const reservationsController = require("../controllers/reservasController");

const router = Router();

router.get("/", async (req, res) => {
  const { fecha, horaInicio, horaFin } = req.query;
  if (fecha, horaInicio, horaFin) {
    try {
      const specificResetvation = await reservationsController.findReservation(
        fecha,
        horaInicio,
        horaFin
      );

      if (!specificResetvation.length)
        return res.status(404).json({ error: "Not found" });

      return res.status(200).json(specificResetvation);
    } catch (error) {
      console.error(
        "GET /reservas reservationsController.findReservation error"
      );
      next(error);
    }
  } else {
    try {
      const reservations = await reservationsController.findAllReservations();
      if (reservations.length < 0)
        return res.status(404).json({ error: "Not found" });

      return res.status(200).json(reservations);
    } catch (error) {
      console.error(
        "GET /reservas reservationsController.findAllReservations error"
      );
      next(error);
    }
  }
});


module.exports = router;
