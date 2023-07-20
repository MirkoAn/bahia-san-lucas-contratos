import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState, useEffect } from "react";
import styles from "./PdfViewer.module.css";

const PDFViewer = ({ children }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <>
      {client && (
        <PDFDownloadLink
          className={styles.pdfView}
          document={children}
          fileName={`${children?.props?.name}-${children?.props?.lastName}-${children?.props?.filename}.pdf`}
        >
          {({ loading }) => {
            return loading ? (
              <div className={styles.loading}>Cargando...</div>
            ) : (
              <button className={styles.button}>
                Descargar {children?.props?.filename}
              </button>
            );
          }}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default PDFViewer;
