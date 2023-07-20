import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
    marginBottom: 48,
  },
  text: {
    margin: 12,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  date: {
    margin: 12,
    marginTop: 48,
    marginBottom: 72,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
  },
  endText: {
    margin: 12,
    marginTop: 48,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 0,
    marginRight: "auto",
  },
  additional: {
    fontSize: 10,
    margin: 12,
    textAlign: "justify",
    fontFamily: "Helvetica-Bold",
  },
  sign: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.5,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 72,
  },
  line: {
    width: "50%",
    borderBottom: "1px solid black",
  },
});

Font.register({
  family: "Noto Sans",
  src: "https://fonts.gstatic.com/s/notosans/v28/o-0IIpQlx3QUlC5A4PNb4g.ttf",
});

const DynamicInput = ({ children }) => (
  <Text style={{ fontFamily: "Helvetica-Bold" }}>{children}</Text>
);

const Constancia = ({ name, lastName, dni, contractNumber, formattedDate }) => {
  return (
    <Document>
      <Page style={styles.body} wrap>
        <Image style={styles.image} src="/assets/icon.png" />
        <Text style={styles.title}>CONSTANCIA DE RECEPCION DE CONTRATO</Text>
        <Text style={styles.text}>
          Por el presente yo,{" "}
          <DynamicInput>
            {name} {lastName}
          </DynamicInput>
          , identificado con DNI Nº <DynamicInput>{dni}</DynamicInput>, declaro
          haber recibido de la empresa INMOBILIARIA &amp; CONSTRUCTORA PIURA
          NORTE S.R.L, el contrato de compra venta de bien futuro N°
          <DynamicInput> {contractNumber}</DynamicInput>, debidamente firmado por su
          representante legal.
        </Text>
        <Text style={styles.date}>Piura, {formattedDate}.</Text>
        <Text style={styles.additional}>LA COMPRADORA</Text>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <Text style={styles.sign}>
          {"\n"}
          {name} {lastName}
          {"\n"}
          DNI Nº {dni}
        </Text>
      </Page>
    </Document>
  );
};

export default Constancia;
