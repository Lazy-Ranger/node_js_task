const { join } = require("path");

function invoiceTeamplatePdf(invoiceData) {
  return {
    compress: false,
    pageMargins: [40, 25, 40, 25],
    content: [
      {
        image: join(__dirname, "../../../../public/images/logo.png"),
        width: 180,
        height: 45,
        margin: [0, -15, 0, 0],
      },
      {
        text: "Advisory Fees – Payment Acknowledgment",
        style: "header",
        fontSize: 14,
        alignment: "center",
        bold: true,
        margin: [0, 10, 0, 0],
      },
      {
        nodeName: "HR",
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 3,
            x2: 595 - 2 * 40,
            y2: 5,
            lineWidth: 1,
            lineColor: "#ACACAC",
          },
        ],
        margin: [0, -3, 0, 16],
      },
      {
        alignment: "justify",
        columns: [
          {
            text: [
              {
                text: "Receipt No :",
                bold: true,
              },
              {
                text: ` ${invoiceData.receipt_no} \n\n\n`,
              },
              {
                text: "To \n",
                bold: true,
              },
              {
                text: `${invoiceData.client_name}\n`,
                bold: true,
              },
              {
                text: [
                  { text: `${invoiceData.address_1}\n` },
                  { text: `${invoiceData.address_2} \n` },
                  { text: `${invoiceData.address_3}\n` },
                  { text: `${invoiceData.city}\n` },
                  { text: `${invoiceData.state}\n` },
                ],
              },
              {
                text: "GISTIN - ",
                bold: true,
              },
              {
                text: `${invoiceData.gst_number}\n`,
              },
              {
                text: "State Code - ",
                bold: true,
              },
              {
                text: `${invoiceData.client_state_code}`,
              },
            ],
            fontSize: 11,
            lineHeight: 1.2,
          },
          {
            text: [
              { text: `Date: `, bold: true },
              { text: `${invoiceData.receipt_gen_date}\n\n\n` },
              { text: "From:\n", bold: true },
              {
                text: "Investment Advisory Services Desk\n",
              },
              {
                text: "Kotak Investment Advisors Limited\n",
                bold: true,
              },
              {
                text: "27-BKC, 7th Floor, G-Block,\n Plot No. C-27 Bandra Kurla Complex,\n Mumbai - 400051, Maharastra\n",
              },
              {
                text: "GISTIN",
                bold: true,
              },
              { text: " - 27AAACK5933H1ZI\n" },
              {
                text: "State Code - ",
                bold: true,
              },
              {
                text: "27",
              },
            ],
            margin: [80, 0, 0, 35],
            fontSize: 11,
            lineHeight: 1.2,
          },
        ],
      },
      {
        text: "Dear Sir / Madam, ",
        fontSize: 11,
      },
      {
        text: [
          { text: "Client Code : ", bold: true },
          { text: `${invoiceData.kial_code}` },
        ],
        margin: [0, 15, 0, 15],
      },
      {
        text: `Thank you for your association with Kotak Investment Advisors Limited for Portfolio Advisory Services. In 
        accordance with the advisory agreement signed and the service rendered by us for the below mentioned billing 
        period, kindly find the details of the fees paid by you as below:-`,
        fontSize: 11,
        lineHeight: 1.2,
        margin: [0, 0, 0, 25],
      },
      {
        table: {
          width: "*",
          headerRows: 1,
          widths: [50, 50, 60, 50, 50, 50, 50, 30, 40],
          body: [
            [
              {
                text: "Billing Period",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Invoice No",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Invoice Amount\n(Including of GST)",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Invoice Date",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Payement Mode",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Receipt Date",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "Received Amount",
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
              {
                text: "TDS, if Any",
                alignment: "center",
                fontSize: 8,
                bold: true,
              },
              {
                text: [{ text: "credit note,\n" }, "if any"],
                alignment: "center",
                bold: true,
                fontSize: 8,
              },
            ],
            [
              {
                text: `${invoiceData.billing_period}`,
                fontSize: 8,
              },
              { text: `${invoiceData.invoice_no}`, fontSize: 8 },
              { text: `${invoiceData.inv_amount}`, fontSize: 8 },
              { text: `${invoiceData.invoice_date}`, fontSize: 8 },
              { text: `${invoiceData.pmnt_mode}`, fontSize: 8 },
              { text: `${invoiceData.receipt_date}`, fontSize: 8 },
              { text: `${invoiceData.received_amt}`, fontSize: 8 },
              { text: `${invoiceData.tds_amount}`, fontSize: 8 },
              { text: `${invoiceData.credit_note}`, fontSize: 8 },
            ],
          ],
        },
      },
      {
        text: [
          { text: "Thanking You,\n" },
          { text: "Warm Regards\n" },
          { text: "For," },
          { text: "Kotak Investment Advisory Limited", bold: true },
        ],
        margin: [0, 100, 0, 70],
        lineHeight: 1.2,
        fontSize: 11,
      },
      {
        text: "Authorised Signatory",
        fontSize: 11,
        bold: true,
      },
      {
        nodeName: "HR",
        margin: [0, 0, 0, 14],
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 514,
            y2: 0,
            lineWidth: 1.5,
            lineColor: "#ACACAC",
          },
        ],
      },
      {
        text: [
          { text: "SAC Classification:", bold: true },
          { text: "Financial Consultancy Services\n" },
          { text: "AC Code                 :", bold: true },
          { text: " 997156" },
        ],
        fontSize: 10,
        lineHeight: 1.2,
      },
      {
        image: join(__dirname, "../../../../public/images/Receipt.png"),
        width: 470,
        height: 50,
        margin: [0, 50, 0, 0],
      },
      {
        text: "SUBJECT TO MUMBAI JURISDICTION",
        fontSize: 10,
        alignment: "right",
        margin: [0, 10, 0, 0],
      },
    ],
  };
}

module.exports = { DATA_DEFINATION_PAYEMENT: invoiceTeamplatePdf };
