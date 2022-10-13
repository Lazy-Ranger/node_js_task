window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;
function makePDF() {
  document.getElementsByClassName("pdfGenereateButton")[0].style.display =
    "none";
  html2canvas(document.querySelector("#capture"), {
    allowTent: true,
    useCORS: true,
    scale: 1,
  }).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const doc = new jsPDF();
    doc.getFontSize(16);
    doc.getFont("Arial");
    doc.addImage(img, 15, 10, 180, 280);
    doc.save();
    document.getElementsByClassName("pdfGenereateButton")[0].style.display =
      "block";
  });
}
