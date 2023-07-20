import PDFViewer from "@/components/organisms/PdfViewer/PdfViewer";
import React from "react";
import Pagare from "../organisms/Pagare";

const DisplayPagare = ({ name, lastName, dni, address, totalAmount, isConyuge, conyugeName, conyugeLastName, conyugeDni }) => {
  return (
    <PDFViewer>
      <Pagare
        filename='Pagare'
        name={name}
        lastName={lastName}
        dni={dni}
        address={address}
        totalAmount={totalAmount}
        isConyuge={isConyuge} 
        conyugeName={conyugeName} 
        conyugeLastName={conyugeLastName} 
        conyugeDni={conyugeDni}
      />
    </PDFViewer>
  );
};

export default DisplayPagare;
