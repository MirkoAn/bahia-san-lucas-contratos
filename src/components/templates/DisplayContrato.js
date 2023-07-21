import Contrato from "@/components/organisms/Contrato";
import PDFViewer from "@/components/organisms/PdfViewer/PdfViewer";
import React from "react";

const DisplayContrato = ({ name, lastName, dni, contractNumber, formattedDate, address, isConyuge, conyugeName, conyugeLastName, conyugeDni, terreno, metraje }) => {
  return (
    <PDFViewer>
      <Contrato
        filename='Contrato'
        name={name}
        lastName={lastName}
        dni={dni}
        contractNumber={contractNumber}
        formattedDate={formattedDate}
        address={address}
        isConyuge={isConyuge}
        conyugeName={conyugeName}
        conyugeLastName={conyugeLastName}
        conyugeDni={conyugeDni}
        terreno={terreno}
        metraje={metraje}
      />
    </PDFViewer>
  );
};

export default DisplayContrato;
