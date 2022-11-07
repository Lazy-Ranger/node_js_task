const { GENETATE_PDF_SERVICE } = require("../service");

class PdfGeneratorController {
  constructor() {
    this.generatePdfService = GENETATE_PDF_SERVICE;
  }
  generatePdf = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePdfFeemedate(req.body);
      res.send(path)
    } catch (err) {
      res.send(err, "Something went wrong");
    }
  };
  generatePdfPayement = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePdfPayement(req.body);
      res.send(path);
    } catch (err) {
      res.send(err);
    }
  };

  generatePdfKmtclAnnual = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePDFkmclAnnual(
        req.body
      );
      res.send(path);
    } catch (err) {
      res.send(err);
    }
  };

  generatePdfKmtclDifferencial = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePDFkmclDifferencial(
        req.body
      );
      res.send(path);
    } catch (err) {
      res.send(err);
    }
  };

  generatePdfKmtclOpen = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePDFkmclOpen(req.body);
      res.send(path);
    } catch (err) {
      res.send(err);
    }
  };

  generatePdfKmtclSetup = async (req, res) => {
    try {
      const path = await this.generatePdfService.generatePDFkmclSetup(req.body);
      res.send(path);
    } catch (err) {
      res.send(err);
    }
  };
}

const PDF_GENERATOR_CONTROLLER = new PdfGeneratorController();

module.exports = {
  PDF_GENERATOR_CONTROLLER,
};
