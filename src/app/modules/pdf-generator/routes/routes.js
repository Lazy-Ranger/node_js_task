const { Router } = require("express");
const {
  PDF_GENERATOR_CONTROLLER,
} = require("../controller/pdf.generator.controller");

const PDF_ROUTES = Router();

PDF_ROUTES.post("/", PDF_GENERATOR_CONTROLLER.generatePdf);
PDF_ROUTES.post("/payement", PDF_GENERATOR_CONTROLLER.generatePdfPayement);
PDF_ROUTES.post(
  "/kmtcl/annual",
  PDF_GENERATOR_CONTROLLER.generatePdfKmtclAnnual
);

PDF_ROUTES.post(
  "/kmtcl/differencial",
  PDF_GENERATOR_CONTROLLER.generatePdfKmtclDifferencial
);

PDF_ROUTES.post("/kmtcl/open", PDF_GENERATOR_CONTROLLER.generatePdfKmtclOpen);
PDF_ROUTES.post("/kmtcl/setup", PDF_GENERATOR_CONTROLLER.generatePdfKmtclSetup);

module.exports = { PDF_ROUTES };
