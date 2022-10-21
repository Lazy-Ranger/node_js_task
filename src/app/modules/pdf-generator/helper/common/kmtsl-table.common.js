function kmtslTable(invoiceData) {
  return {
    table: {
      widths: [325, "*"],
      body: [
        [
          { text: "Particulars", alignment: "center", fontSize: 11 },
          { text: "Amount (Rs.)", alignment: "center", fontSize: 11 },
        ],
        [
          {
            text: `${invoiceData.remarks} `,
            fontSize: 11,
          },
          {
            text: `${invoiceData.final_amount}`,
            alignment: "right",
            fontSize: 11,
          },
        ],
        [
          { text: "Total" },
          {
            text: `${invoiceData.final_amount}`,
            alignment: "right",
            fontSize: 11,
          },
        ],
        [
          { text: "CGST @ 9%" },
          { text: `${invoiceData.cgst}`, alignment: "right", fontSize: 11 },
        ],
        [
          { text: "SGST @ 9%" },
          { text: `${invoiceData.sgst}`, alignment: "right", fontSize: 11 },
        ],
        [
          { text: "IGST @ 18%" },
          { text: `${invoiceData.igst}`, alignment: "right", fontSize: 11 },
        ],
        [
          { text: "Total" },
          {
            text: `${invoiceData.total_amount}`,
            alignment: "right",
            fontSize: 11,
          },
        ],
      ],
    },
  };
}

module.exports = {
  kmtslTable,
};
