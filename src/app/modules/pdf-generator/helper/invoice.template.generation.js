const { FONT_SIZE } = require("../../../constants");
const { join } = require("path");

function invoiceTeamplate() {
  return {
    compress: false,
    content: [
      {
        image: join(__dirname, "../../../../public/images/logo.png"),
        width: 150,
        height: 40,
      },
      {
        text: "TAX INVOICE",
        style: "header",
        fontSize: FONT_SIZE.TEN,
      },
      {
        nodeName: "HR",
        margin: [0, 2, 0, 10],
        canvas: [
          {
            type: "line",
            x1: 3,
            y1: 3,
            x2: 514,
            y2: 0,
            lineWidth: 0.5,
            lineColor: "#ACACAC",
          },
        ],
      },
      {
        text: " ",
        style: [],
      },
      {
        alignment: "justify-content-center",
        columns: [
          {
            text: [
              {
                text: "Invoice No :",
                bold: true,
              },
              {
                text: " INV/2022-23/00886\n",
              },
              {
                text: "Invoice Generation Date",
                bold: true,
              },
              {
                text: " INV/2022-23/00886\n",
              },
              {
                text: "Invoice To : \n",
              },
              {
                text: ` Ayush Agrawal\n`,
                bold: true,
              },
              {
                text: "New Address \n test \n NA \n Pune-343454 \n Maharastra\n",
              },
              {
                text: "GISTIN - ",
                bold: true,
              },
              {
                text: "04AABCU96034R1ZU0\n",
              },
              {
                text: "State Code - ",
                bold: true,
              },
              {
                text: "27",
              },
            ],
            fontSize: FONT_SIZE.TEN,
          },
          {
            text: [
              { text: "Invoice From:\n" },
              { text: "Investment Advisor Service Desk\n" },
              { text: "Kotak Investment advisor limited\n", bold: true },
              {
                text: "Address: Buddha Tower, B1,\n Gautam Budh Nagar,\n Noida-201301 \n Uttar Pradesh\n",
              },
              {
                text: "GISTIN",
                bold: true,
              },
              { text: "04AABCU9603R1ZV\n" },
              {
                text: "State Code - ",
                bold: true,
              },
              {
                text: "27",
              },
            ],
            margin: [20, 10, 0, 18],
            fontSize: FONT_SIZE.TEN,
          },
        ],
      },
      {
        text: [
          { text: "Subject:", bold: true },
          {
            text: "Tax invoice for investment Advisor service ",
            decoration: "underline",
          },
          {
            text: "for",
          },
          {
            text: " IAS CODE",
            bold: true,
          },
          {
            text: " -23232",
          },
        ],
        fontSize: FONT_SIZE.TEN,
        margin: [0, 10, 0, 0],
      },
      {
        text: "Dear Sir / Madam, ",
        margin: [0, 10],
      },
      {
        text: " Thank you for being associated with investment advisory limited.In accordance with the investment advisory aggrement, please find below tax innvoice towards investment advisory fees for the period ended  31 oct 2020",
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
                fontSize: FONT_SIZE.TEN,
              },
              "",
              {
                text: "Amount (INR)",
                bold: true,
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
              },
            ],
            [
              {
                text: "Investment Advisory Services fee for",
                bold: true,
                fontSize: FONT_SIZE.TEN,
                rowSpan: 2,
                border: [true, false, false, false],
              },
              {
                text: "Taxable value of Services",
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
                bold: true,
              },
              {
                text: "7,825.00",
                alignment: "right",
              },
            ],
            [
              {},
              {
                text: "CGST @ 9%",
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
                bold: true,
              },
              {
                text: "6,735.00",
                alignment: "right",
                fontSize: FONT_SIZE.TEN,
              },
            ],
            [
              {
                text: [
                  { text: "Periouds: ", bold: true, fontSize: FONT_SIZE.TEN },
                  { text: "01 OCT 2020 31 OCT 2020", fontSize: FONT_SIZE.TEN },
                ],
                border: [true, false, false, false],
                rowSpan: 3,
              },
              {
                text: "SGST @ 9%",
                bold: true,
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
              },
              { text: "6,735.00", alignment: "right", fontSize: FONT_SIZE.TEN },
            ],
            [
              { text: "", border: [true, false, false, true] },
              {
                text: "IGST @ 18%",
                bold: true,
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
              },
              { text: "0.00", alignment: "right", fontSize: FONT_SIZE.TEN },
            ],
            [
              { text: "" },
              {
                text: "Total invoice value",
                alignment: "center",
                fontSize: FONT_SIZE.TEN,
                bold: true,
              },
              {
                text: "88,295.00",
                fontSize: FONT_SIZE.TEN,
                alignment: "right",
              },
            ],
            [
              {
                text: [
                  {
                    text: "Amount in words:",
                    bold: true,
                    fontSize: FONT_SIZE.TEN,
                  },
                  {
                    text: " Eight Eight Thousand Two Hundred and Ninety Five Only",
                    fontSize: FONT_SIZE.TEN,
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
        fontSize: 10,
        padding: [3, 0, 0, 0],
        margin: [0, 20, 0, 40],
      },
      {
        text: "Authorised signature",
        fontSize: FONT_SIZE.TEN,
        bold: true,
      },
      {
        nodeName: "HR",
        margin: [0, 2, 0, 10],
        canvas: [
          {
            type: "line",
            x1: 3,
            y1: 3,
            x2: 514,
            y2: 0,
            lineWidth: 0.5,
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
                fontSize: FONT_SIZE.TEN,
              },
              { text: ":lorem span \n", fontSize: FONT_SIZE.NINE },
              {
                text: "SAS Code                  ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              { text: ":Lorem span \n", fontSize: FONT_SIZE.NINE },
              {
                text: "PAN No:                     ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              { text: ":Lorem span\n", fontSize: FONT_SIZE.NINE },
              {
                text: "GISTIN                       ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              { text: ":Lorem span", fontSize: FONT_SIZE.NINE },
            ],
          },
          {
            text: [
              {
                text: "Full Name Of beneficiary   ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: ": Kotak Investment Advisory Limited\n",
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: "Benificery Ac No.                ",
                fontSize: FONT_SIZE.NINE,
                bold: true,
              },
              { text: ": lorem span\n", fontSize: FONT_SIZE.NINE },
              {
                text: "ISFC Code                             ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: ": Lorem span\n",
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: "Bank                                      ",
                bold: true,
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: ": Kotak Mahindra Bank Limited\n",
                fontSize: FONT_SIZE.NINE,
              },
              {
                text: "Branch                                   ",
                fontSize: FONT_SIZE.NINE,
                bold: true,
              },
              {
                text: ":Noida 62",
                fontSize: FONT_SIZE.NINE,
              },
            ],
          },
        ],
      },
      {
        text: "Note: Kindly note that effective 1st April 2023 we shall be raising the advisory invoice on a quater basic by 15th jul 15th oct 15th jan and 15th Apr",
        fontSize: FONT_SIZE.SEVEN,
        margin: [0, 15, 0, 0],
        decoration: "underline",
        color: "#838588",
      },
      {
        image: join(
          __dirname,
          "../../../../public/images/kotak.mahindra.thub.png"
        ),
        width: 450,
        height: 50,
        margin: [0, 30, 0, 0],
      },
      {
        text: "SUBJECT TO MUMBAI JURIDICTION",
        fontSize: 10,
        alignment: "right",
        margin: [0, 10, 0, 0],
      },
    ],
    styles: {
      header: {
        fontSize: 10,
        bold: true,
        alignment: "center",
      },
    },
  };
}

module.exports = { DATA_DEFINATION: invoiceTeamplate };
