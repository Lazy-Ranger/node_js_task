const { Router } = require("express");
const {
  PDF_GENERATOR_CONTROLLER,
} = require("../controller/pdf.generator.controller");

const PDF_ROUTES = Router();

PDF_ROUTES.get("/", PDF_GENERATOR_CONTROLLER.generatePdf);

module.exports = { PDF_ROUTES };
