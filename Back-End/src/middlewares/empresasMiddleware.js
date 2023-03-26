const { Router } = require("express");
const CompaniesController = require("../controllers/empresasController");

const router = Router();

router.get("/", async (req, res) => {
  const { idsport } = req.query;

  if (idsport) {
    try {
      const companybysport = await CompaniesController.findCompaniesXSport(
        idsport
      );

      if (!companybysport.length) return res.status(404).json({ error: "Not found" });

      return res.status(200).json(companybysport);
    } catch (error) {
      console.error(
        "GET /empresas CompaniesController.findCompaniesXSport error"
      );
      next(error);
    }
  } else {
    try {
      const companies = await CompaniesController.findAllCompanies();
      if (companies.length < 0)
        return res.status(404).json({ error: "Not found" });

      return res.status(200).json(companies);
    } catch (err) {
      console.error("GET /empresas CompaniesController.findAllCompanies error");
    }
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("no id provided");

  try {
    const company = await CompaniesController.findById(id);

    if (!company) return res.status(404).json({ error: "Not found" });

    return res.status(200).json(company);
  } catch (error) {
    console.error("GET /empresas/:id CompaniesController.findById error");
    next(error);
  }
});

module.exports = router;
