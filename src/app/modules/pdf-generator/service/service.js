const { DATA_DEFINATION } = require("../helper");
const pdfmake = require("pdfmake");
const { join } = require("path");
const { createWriteStream } = require("fs");

const fonts = {
  Roboto: {
    bold: join(__dirname, "../../../../public/fonts/Roboto-Bold.ttf"),
    normal: join(__dirname, "../../../../public/fonts/Roboto-Regular.ttf"),
  },
};

class GeneratePdfServices {
  constructor() {}
  genreate() {
    return new Promise((resolve, reject) => {
      const PdfPrinter = new pdfmake(fonts);
      let pdfdoc = PdfPrinter.createPdfKitDocument(DATA_DEFINATION(), {
        fontLayoutCache: false,
        bufferPages: false,
      });
      let fileName = Date.now();
      const path = join(__dirname, `../../../../../pdf/${fileName}.pdf`);

      const fileStream = createWriteStream(path);

      const pdfStream = pdfdoc.pipe(fileStream);

      pdfStream.on("close", () => {
        resolve(path);
      });

      pdfStream.on("error", (err) => {
        reject(err);
      });

      pdfdoc.end();
    });
  }
}

const GENETATE_PDF_SERVICE = new GeneratePdfServices();

module.exports = { GENETATE_PDF_SERVICE };
