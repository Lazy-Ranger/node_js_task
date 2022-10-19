const { GENETATE_PDF_SERVICE } = require("../service");

class PdfGeneratorController {
  constructor() {
    this.generatePdfService = GENETATE_PDF_SERVICE;
  }
  generatePdf = async (req, res) => {
    try {
      const path = await this.generatePdfService.generate(req.body);
      res.send(path);
    } catch (err) {
      res.send(err, "Something went wrong");
    }
  };
}

const PDF_GENERATOR_CONTROLLER = new PdfGeneratorController();

module.exports = {
  PDF_GENERATOR_CONTROLLER,
};
