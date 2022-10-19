const { join } = require("path");

function invoiceTeamplate(invoiceData) {
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
        text: "TAX INVOICE",
        style: "header",
        fontSize: 14,
        alignment: "center",
        bold: true,
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
        margin: [0, -3, 0, 20],
      },
      {
        alignment: "justify",
        columns: [
          {
            text: [
              {
                text: "Invoice No :",
                bold: true,
              },
              {
                text: ` ${invoiceData.invoice_number}\n`,
              },
              {
                text: "Invoice Generation Date",
                bold: true,
              },
              {
                text: ` ${invoiceData.invoice_date}\n`,
              },
              {
                text: "Invoice To : \n",
              },
              {
                text: ` ${invoiceData.client_name}\n`,
                bold: true,
              },
              {
                text: `${invoiceData.address_1} \n ${invoiceData.address_2} \n ${invoiceData.address_3} \n ${invoiceData.city}- ${invoiceData.pinecode} \n ${invoiceData.state}\n`,
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
                text: `${invoiceData.state_no}`,
              },
            ],
            fontSize: 11,
            lineHeight: 1.2,
          },
          {
            text: [
              { text: "Invoice From:\n" },
              { text: "Investment Advisor Service Desk\n" },
              { text: "Kotak Investment advisor limited\n", bold: true },
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
            margin: [80, 10, 0, 18],
            fontSize: 12,
            lineHeight: 1.2,
          },
        ],
      },
      {
        text: [
          { text: "Subject:", bold: true },
          {
            text: " Tax Invoice for Investment Advisory Services",
            decoration: "underline",
          },
          {
            text: " for",
          },
          {
            text: " IAS CODE",
            bold: true,
          },
          {
            text: ` : ${invoiceData.kial_code}`,
          },
        ],
        fontSize: 11,
        margin: [0, 10, 0, 0],
      },
      {
        text: "Dear Sir / Madam, ",
        margin: [0, 10],
        fontSize: 11,
      },
      {
        text: [
          {
            text: `Thank you for being associated with Investment Advisory Services Limited. In accordance with the Investment
        Advisory Services agreement, please find below Tax invoice towards Investment Advisory fees for the period ended ${invoiceData.to}`,
          },
        ],
        fontSize: 11,
        lineHeight: 1.2,
      },
      {
        text: "\n\n",
      },
      {
        table: {
          headerRows: 1,
          widths: [220, "*", "*"],
          body: [
            [
              {
                text: "Particulars",
                bold: true,
                alignment: "center",
                fontSize: 11,
              },
              "",
              {
                text: "Amount (INR)",
                bold: true,
                alignment: "center",
                fontSize: 11,
              },
            ],
            [
              {
                text: "Investment Advisory Services Fees for",
                bold: true,
                fontSize: 11,
                rowSpan: 2,
                border: [true, false, false, false],
              },
              {
                text: "Taxable value of Services",
                alignment: "center",
                fontSize: 11,
                bold: true,
              },
              {
                text: `${invoiceData.final_amount}`,
                alignment: "right",
              },
            ],
            [
              {},
              {
                text: "CGST @ 9%",
                alignment: "center",
                fontSize: 11,
                bold: true,
              },
              {
                text: `${invoiceData.cgst}`,
                alignment: "right",
                fontSize: 11,
              },
            ],
            [
              {
                text: [
                  { text: "Period: ", bold: true, fontSize: 12 },
                  { text: "01 OCT 2020 31 OCT 2020", fontSize: 12 },
                ],
                border: [true, false, false, false],
                rowSpan: 3,
              },
              {
                text: "SGST @ 9%",
                bold: true,
                alignment: "center",
                fontSize: 11,
              },
              {
                text: `${invoiceData.sgst}`,
                alignment: "right",
                fontSize: 11,
              },
            ],
            [
              { text: "", border: [true, false, false, true] },
              {
                text: "IGST @ 18%",
                bold: true,
                alignment: "center",
                fontSize: 11,
              },
              {
                text: `${invoiceData.igst}`,
                alignment: "right",
                fontSize: 11,
              },
            ],
            [
              { text: "" },
              {
                text: "Total invoice value",
                alignment: "center",
                fontSize: 11,
                bold: true,
              },
              {
                text: `${invoiceData.total_amount}`,
                fontSize: 11,
                alignment: "right",
              },
            ],
            [
              {
                text: [
                  {
                    text: "Amount in words:",
                    bold: true,
                    fontSize: 10,
                  },
                  {
                    text: ` ${invoiceData.amount_in_words}`,
                    fontSize: 11,
                  },
                ],
                colSpan: 3,
              },
              {},
              {},
            ],
          ],
        },
      },
      {
        text: [
          { text: "Thanking You,\n" },
          { text: "Warm Regrds, \n" },
          { text: "For ," },
          { text: " Kotak Investment Advisors Limited ", bold: true },
        ],
        fontSize: 11,
        margin: [0, 20, 0, 55],
        lineHeight: 1.2,
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
        alignment: "justify",
        columns: [
          {
            text: [
              {
                text: "SAS Certification ",
                bold: true,
                fontSize: 10,
              },
              {
                text: ": Financial Consultancy Services \n",
                fontSize: 10,
              },
              {
                text: "SAS Code              ",
                bold: true,
                fontSize: 10,
              },
              { text: ": 997156 \n", fontSize: 10 },
              {
                text: "PAN No:                ",
                bold: true,
                fontSize: 10,
              },
              { text: ": AAACK5933H\n", fontSize: 10 },
              {
                text: "GISTIN                   ",
                bold: true,
                fontSize: 10,
              },
              { text: ": 27AAACK5933H1ZI ", fontSize: 10 },
            ],
            lineHeight: 1.2,
          },
          {
            text: [
              {
                text: "Full Name Of beneficiary   ",
                bold: true,
                fontSize: 10,
              },
              {
                text: ": Kotak Investment Advisory Limited\n",
                fontSize: 10,
              },
              {
                text: "Benificery Ac No.                 ",
                fontSize: 10,
                bold: true,
              },
              ": ",
              {
                text: "5046434901\n",
                fontSize: 10,
                decoration: "underline",
              },
              {
                text: "ISFC Code                              ",
                bold: true,
                fontSize: 10,
              },
              {
                text: ": KKBK0000958\n",
                fontSize: 10,
              },
              {
                text: "Bank                                       ",
                bold: true,
                fontSize: 10,
              },
              {
                text: ": Kotak Mahindra Bank Limited\n",
                fontSize: 10,
              },
              {
                text: "Branch                                   ",
                fontSize: 10,
                bold: true,
              },
              ": ",
              {
                text: "Mittal Court, Nariman Point, Mum.",
                fontSize: 10,
                decoration: "underline",
              },
            ],
            lineHeight: 1.2,
          },
        ],
      },
      {
        text: `Note: Kindly note that effective 1st April 2023, we shall be raising the advisory invoices on a quarterly basis by 15th_Jul, 15th_Oct, 15th_Jan and 15th_Apr.`,
        fontSize: 8,
        margin: [0, 15, 0, 0],
        decoration: "underline",
      },
      {
        image: join(__dirname, "../../../../public/images/footer.png"),
        width: 400,
        height: 50,
        margin: [0, 50, 0, 0],
      },
      {
        text: "SUBJECT TO MUMBAI JURIDICTION",
        fontSize: 10,
        alignment: "right",
        margin: [0, 10, 0, 0],
      },
    ],
  };
}

module.exports = { DATA_DEFINATION: invoiceTeamplate };
