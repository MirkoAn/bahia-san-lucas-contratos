import Constancia from "@/components/organisms/Constancia";
import PDFViewer from "@/components/organisms/PdfViewer/PdfViewer";
import React from "react";

const DisplayConstancia = ({ name, lastName, dni, contractNumber, formattedDate }) => {
  return (
    <PDFViewer>
      <Constancia
        filename='Constancia'
        name={name}
        lastName={lastName}
        dni={dni}
        formattedDate={formattedDate}
        contractNumber={contractNumber}
      />
    </PDFViewer>
  );
};

export default DisplayConstancia;
