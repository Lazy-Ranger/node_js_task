const {
  kmtslHeader,
  kmtslUserAddressDetail,
  kmtslTable,
  kmtslFooter,
} = require("./common");

function invoiceTeamplatePdf(invoiceData) {
  return {
    compress: false,
    pageMargins: [40, 20, 40, 20],
    content: [
      // Header
      ...kmtslHeader().content,
      { text: "\n" },
      // Personal Info
      kmtslUserAddressDetail(invoiceData),
      { text: "\n" },
      // Main Table
      kmtslTable(invoiceData),
      { text: "\n" },
      {
        text: [
          {
            text: "Amount in words :                          ",
            fontSize: 11,
          },
          { text: `${invoiceData.amount_in_words}`, fontSize: 11 },
        ],
        margin: [0, 0, 0, 15],
      },
      {
        columns: [
          {
            text: [
              { text: "Payement Instructions:\n", fontSize: 11 },
              { text: "Online Payement Details", fontSize: 11 },
            ],
            lineHeight: 1.2,
          },
          {
            text: [
              {
                text: "Cheque to be drawn in favour of Kotak Mahindra Trusteeship Services Limited\n",
                fontSize: 11,
              },
              {
                text: `Account Name: Kotak Mahindra Trusteeship Services Limited
                  Account Number: 09582090000460
                  Bank Name: Kotak Mahindra Bank Limited
                  IFSC Code: KKBK0000958`,
                fontSize: 11,
                lineHeight: 1.2,
              },
            ],
            margin: [-111, 0, 0, 0],
          },
        ],
      },
      {
        text: [
          { text: "Classification/Description of Service :", fontSize: 11 },
          { text: "Trust & Custody Services", fontSize: 11 },
        ],
        margin: [0, 5, 0, 5],
      },
      {
        text: [
          {
            text: `HSN/SAC:                                     `,
            fontsize: 11,
          },
          { text: "997154\n", fontsize: 11 },
          {
            text: "Income Tax PAN :                            ",
            fontSize: 11,
          },
          { text: "AABCK4227B\n", fontsize: 11 },
          {
            text: "GSTIN / UIN:                                    ",
            fontSize: 11,
          },
          { text: `${invoiceData.gstNo}`, fontSize: 10 },
        ],
        lineHeight: 1.2,
        fontsize: 11,
      },
      {
        text: "For, Kotak Mahindra Trusteeship Services Limited",
        margin: [0, 15, 0, 0],
        fontSize: 11,
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
        text: [
          {
            text: "Authorised Signatory/ies",
            fontSize: 11,
          },
        ],
        margin: [0, 10, 0, 0],
      },
      { text: "", margin: [0, 0, 0, 110] },
      kmtslFooter(),
    ],
  };
}

module.exports = {
  DATA_DEFINATION_KMTSL_SETUP: invoiceTeamplatePdf,
};
