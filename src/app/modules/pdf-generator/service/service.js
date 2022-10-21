const {
  DATA_DEFINATION_FEEMEDATE,
  DATA_DEFINATION_PAYEMENT,
  DATA_DEFINATION_KMTSL_ANNUAL,
  DATA_DEFINATION_KMTSL_DIFFERENCIAL,
  DATA_DEFINATION_KMTSL_OPEN,
  DATA_DEFINATION_KMTSL_SETUP,
} = require("../helper");
const pdfmake = require("pdfmake");
const { join } = require("path");
const { createWriteStream } = require("fs");

const fonts = {
  Roboto: {
    bold: join(__dirname, "../../../../public/fonts/Calibri Bold.ttf"),
    normal: join(__dirname, "../../../../public/fonts/Calibri Regular.ttf"),
  },
};

function generatePDF(dataDefinationfun, requestedBody) {
  const PdfPrinter = new pdfmake(fonts);
  let pdfdoc = PdfPrinter.createPdfKitDocument(
    dataDefinationfun(requestedBody),
    {
      fontLayoutCache: false,
      bufferPages: false,
    }
  );
  let fileName = Date.now();
  const path = join(__dirname, `../../../../../pdf/${fileName}.pdf`);

  const fileStream = createWriteStream(path);

  const pdfStream = pdfdoc.pipe(fileStream);

  pdfStream.on("error", (err) => {
    throw err;
  });

  pdfdoc.end();

  return path;
}

class GeneratePdfServices {
  constructor() {}

  async generatePdfFeemedate(requestedData) {
    return generatePDF(DATA_DEFINATION_FEEMEDATE, requestedData);
  }

  async generatePdfPayement(requestedData) {
    return generatePDF(DATA_DEFINATION_PAYEMENT, requestedData);
  }

  async generatePDFkmclAnnual(requestedData) {
    return generatePDF(DATA_DEFINATION_KMTSL_ANNUAL, requestedData);
  }

  async generatePDFkmclDifferencial(requestedData) {
    return generatePDF(DATA_DEFINATION_KMTSL_DIFFERENCIAL, requestedData);
  }

  async generatePDFkmclOpen(requestedData) {
    return generatePDF(DATA_DEFINATION_KMTSL_OPEN, requestedData);
  }
  async generatePDFkmclSetup(requestedData) {
    return generatePDF(DATA_DEFINATION_KMTSL_SETUP, requestedData);
  }
}

const GENETATE_PDF_SERVICE = new GeneratePdfServices();

module.exports = { GENETATE_PDF_SERVICE };
