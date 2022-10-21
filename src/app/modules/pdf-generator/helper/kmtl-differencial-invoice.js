const {
  kmtslHeader,
  kmtslUserAddressDetail,
  kmtslTable,
  kmtslFooter,
} = require("./common");

function invoiceTeamplatePdf(invoiceData) {
  return {
    compress: false,
    pageMargins: [40, 25, 40, 25],
    content: [
      // Header
      ...kmtslHeader().content,
      // Personal Info
      { text: "\n" },
      kmtslUserAddressDetail(invoiceData),
      { text: "\n\n" },
      // Main Table
      kmtslTable(invoiceData),
      { text: "\n", margin: [0, 7, 0, 0] },
      {
        text: [
          { text: "Amount in words :                     " },
          { text: `${invoiceData.amount_in_words}` },
        ],
      },
      {
        text: [
          { text: "Classification/Description of Service :" },
          { text: "Trust & Custody Services" },
        ],
        margin: [0, 14, 0, 14],
      },
      {
        text: [
          { text: `HSN/SAC:                                     ` },
          { text: "997154\n" },
          { text: "Income Tax PAN :                       " },
          { text: "AABCK4227B\n" },
          { text: "GSTIN / UIN:                               " },
          { text: `${invoiceData.gstNo}` },
        ],
        lineHeight: 1.2,
      },
      {
        text: "For, Kotak Mahindra Trusteeship Services Limited",
        margin: [0, 35, 0, 0],
      },
      {
        columns: [
          {
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 120,
                h: 50,
                r: 0,
                lineWidth: 1.2,
                lineColor: "#2F528F",
              },
            ],
          },
          {
            margin: [-130, 0, 0, 0],
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 120,
                h: 50,
                r: 0,
                lineWidth: 1.2,
                lineColor: "#2F528F",
              },
            ],
          },
        ],

        margin: [0, 5, 0, 5],
      },
      {
        text: [{ text: "Authorised Signatory/ies" }],
        margin: [0, 0, 0, 120],
      },
      kmtslFooter(),
    ],
  };
}

module.exports = {
  DATA_DEFINATION_KMTSL_DIFFERENCIAL: invoiceTeamplatePdf,
};
