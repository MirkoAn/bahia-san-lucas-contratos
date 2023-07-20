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
          fileName={`${children?.props?.name}-${children?.props?.lastName}-${children?.type?.name}.pdf`}
        >
          {({ blob, url, loading, error }) => {
            console.log("blob ->", blob);
            console.log("url ->", url);
            console.log("loading ->", loading);
            console.log("error ->", error);
            return loading ? (
              <div className={styles.loading}>Cargando...</div>
            ) : (
              <button className={styles.button}>
                Descargar {children?.type?.name}
              </button>
            );
          }}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default PDFViewer;
