const { Router } = require("express");
const { PDF_ROUTES } = require("../modules/pdf-generator");
const APP_ROUTER = Router();

APP_ROUTER.use("/pdf", PDF_ROUTES);

module.exports = {
  APP_ROUTER,
};
