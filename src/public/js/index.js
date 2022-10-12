window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;
function makePDF() {
  html2canvas(document.querySelector("#capture"), {
    allowTent: true,
    useCORS: true,
    scale: 1,
  }).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const doc = new jsPDF();
    doc.getFontSize(11);
    doc.getFont("Arial");
    doc.addImage(img, 7, 13, 195, 105);
    doc.save();
  });
}
