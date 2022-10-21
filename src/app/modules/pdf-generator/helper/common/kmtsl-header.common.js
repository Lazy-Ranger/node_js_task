const { join } = require("path");

function kmtslHeader(invoiceData) {
  return {
    content: [
      {
        image: join(__dirname, "../../../../../public/images/kotaklogo.jpg"),
        width: 125,
        height: 38,
        margin: [0, -15, 0, 0],
      },
      {
        text: "Tax Invoice",
        style: "header",
        fontSize: 15,
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
      },
    ],
  };
}
module.exports = {
  kmtslHeader,
};
