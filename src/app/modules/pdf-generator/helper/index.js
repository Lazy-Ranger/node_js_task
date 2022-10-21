module.exports = {
  ...require("./feemendate-invoice.template.generation"),
  ...require("./payment-invoice.generator"),
  ...require("./kmtsl-annual.invoice"),
  ...require("./kmtl-differencial-invoice"),
  ...require("./kmtcl-open.invoice"),
  ...require("./kmtsl-setup.invoice"),
};
