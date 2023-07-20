import Resumen from "@/components/organisms/Resumen";
import PDFViewer from "@/components/organisms/PdfViewer/PdfViewer";
import React from "react";

const DisplayResumen = ({ name, lastName, dni, formattedDate }) => {
  return (
    <PDFViewer>
      <Resumen
        filename='Resumen'
        name={name}
        lastName={lastName}
        dni={dni}
        formattedDate={formattedDate}
      />
    </PDFViewer>
  );
};

export default DisplayResumen;
