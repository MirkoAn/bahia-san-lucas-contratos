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
import List, { Item } from "../molecules/List";

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginBottom: 30,
  },
  text: {
    margin: 14,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  date: {
    margin: 10,
    marginTop: 24,
    marginBottom: 48,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 0,
    marginRight: "auto",
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
    marginTop: 24,
  },
  line: {
    width: "50%",
    borderBottom: "1px solid black",
  },
  detailContainer: {
    flexDirection: "row",
    fontSize: 10,
  },
});

Font.register({
  family: "Noto Sans",
  src: "https://fonts.gstatic.com/s/notosans/v28/o-0IIpQlx3QUlC5A4PNb4g.ttf",
});

const DynamicInput = ({ children }) => (
  <Text style={{ fontFamily: "Helvetica-Bold" }}>{children}</Text>
);

const resumenDetails = [
  "Partida registral del lote matriz del cual se independizará el producto ofrecido.",
  "Situación del proceso de habilitación urbana o de licencias de edificación, según corresponda declarando desde ya, tener conocimiento que nos encontramos en proceso de elaboración de proyecto para solicitar Licencia de habilitación urbana.",
  "Plano de lotización del lote ofertado, precisando las características generales, de ser el caso.",
  "Plano de ubicación donde se Identifica y se aprecia las características del lote ofertado y se aprecia el ante proyecto de arquitectura.",
  "Precio de venta del lote ofertado, incluyendo la forma de pago, plazo, moneda en la que se realiza el pago, los gastos y tributos, promociones y descuentos, y cronograma de pagos debidamente desagregado.",
  "Condiciones de la separación: vigencia, causales y efectos de la resolución (gastos administrativos y penalidades). En la venta de inmuebles sobre planos o de bienes futuros, el proveedor debe devolver el íntegro de los pagos adelantados efectuados por todo concepto a sola solicitud del consumidor, en el caso de que la prestación no se llegue a ejecutar por causas atribuibles al proveedor.",
  "Datos del proveedor: Partida Registral de la Persona Jurídica, nombre de los representantes legales con sus vigencias de poder debidamente inscrito, Registro Único de Contribuyentes (RUC) o Documento Nacional de Identidad (DNI), de ser el caso.",
  "Contrato de compra venta solicitado.",
];

const Resumen = ({ name, lastName, dni, formattedDate }) => {
  return (
    <Document>
      <Page style={styles.body} wrap>
        <Image style={styles.image} src="/assets/icon.png" />
        <Text style={styles.title}>HOJA RESUMEN</Text>
        <Text style={styles.text}>
          Yo,{" "}
          <DynamicInput>
            {name} {lastName}
          </DynamicInput>
          , identificado con DNI Nº <DynamicInput>{dni}</DynamicInput>, declaro
          haber tenido a la vista de manera previa y gratuita a la suscripción
          del contrato la siguiente información, la misma que me fue entregada
          oportunamente:
        </Text>
        <List>
          {resumenDetails.map((detail, i) => (
            <Item
              key={i}
              number={i}
              style={styles.detailContainer}
            >
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.date}>
          Firmado en señal de conformidad, {formattedDate}.
        </Text>
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

export default Resumen;
