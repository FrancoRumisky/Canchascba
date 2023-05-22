const { Router } = require("express");
const FieldsController = require("../controllers/canchasController");
const reservationsController = require("../controllers/reservasController");

const router = Router();

router.get("/", async (req, res) => {
  const { idcompany, idsport, fecha, horaInicio, horaFin } = req.query;

  if (idcompany && idsport && fecha && horaInicio && horaFin) {
    try {
      const specificResetvation = await reservationsController.findReservation(
        fecha,
        horaInicio,
        horaFin
      );

      const fieldIds = specificResetvation.map((e) => e.CanchaId);

      const fieldsxcompany = await FieldsController.findFieldsXCompanyAndSport(
        idcompany,
        idsport,
        fieldIds
      );

      if (fieldsxcompany.length < 0 )
        return res.status(404).json({ error: "Not found" });

      return res.status(200).json(fieldsxcompany);
    } catch (error) {
      console.error(
        "GET /canchas FieldsController.findFieldsXCompanyAndSport error"
      );
      next(error);
    }
  } else {
    try {
      const fields = await FieldsController.findAllFields();
      if (fields.length < 0)
        return res.status(404).json({ error: "Not found" });

      return res.status(200).json(fields);
    } catch (err) {
      console.error("GET /canchas FieldsController.findAllFields error");
    }
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("no id provided");

  try {
    const field = await FieldsController.findById(id);

    if (!field) return res.status(404).json({ error: "Not found" });

    return res.status(200).json(field);
  } catch (error) {
    console.error("GET /canchas/:id FieldsController.findById error");
    next(error);
  }
});

module.exports = router;
