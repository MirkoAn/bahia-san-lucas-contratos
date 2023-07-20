import PDFViewer from "@/components/organisms/PdfViewer/PdfViewer";
import React from "react";
import DeclaracionJurada from "../organisms/DeclaracionJurada";

const DisplayDeclaracion = ({ name, lastName, dni, address, terreno, ocupacion, formattedDate }) => {
  return (
    <PDFViewer>
      <DeclaracionJurada
        name={name}
        lastName={lastName}
        dni={dni}
        address={address}
        terreno={terreno}
        ocupacion={ocupacion}
        formattedDate={formattedDate}
      />
    </PDFViewer>
  );
};

export default DisplayDeclaracion;
