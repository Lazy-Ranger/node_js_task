function kmtslUserAddressDetail(invoiceData) {
  return {
    layout: "noBorders",
    table: {
      fontSize: 10,
      widths: [160, 120],
      heights: 16,
      body: [
        [
          { text: "D/N :" },
          { text: `${invoiceData.invoice_number}`, fontSize: 11 },
        ],
        [
          { text: "Date :" },
          { text: `${invoiceData.invoice_date}`, fontSize: 11 },
        ],
        [
          { text: "Name :", fontSize: 11 },
          {
            text: `${invoiceData.client_name}
            ${invoiceData.address_1}
            ${invoiceData.address_2}
            ${invoiceData.address_3}
            ${invoiceData.city} - ${invoiceData.pincode}
            ${invoiceData.state} - ${invoiceData.client_state_code}
            ${invoiceData.country}
            GSTIN/UIN – ${invoiceData.gst_number}
            Place of supply : ${invoiceData.state}
            Supply State Code : ${invoiceData.client_state_code}`,
            light: true,
            fontSize: 11,
          },
        ],
      ],
    },
  };
}
module.exports = {
  kmtslUserAddressDetail,
};
