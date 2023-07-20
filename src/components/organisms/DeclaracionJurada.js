import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 45,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    textDecoration: "underline",
  },
  text: {
    margin: 14,
    marginBottom: 8,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  date: {
    margin: 12,
    marginTop: 24,
    marginBottom: 48,
    fontSize: 10,
    textAlign: "justify",
    justifyContent: "flex-end",
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

const DeclaracionJurada = ({ name, lastName, dni, address, terreno, ocupacion, formattedDate }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>DECLARACIÓN JURADA</Text>
        <Text style={styles.text}>
          Yo, <DynamicInput>{name} {lastName}</DynamicInput>, identificado con DNI Nº {dni}, con domicilio real en 
          <DynamicInput> {address.domicilio}</DynamicInput>, Distrito {address.distrito},
          Provincia {address.provincia} y Departamento de {address.departamento}, en pleno uso de mis facultades intelectuales, conocimiento y
          libertad suficiente, entendido en el idioma castellano, haciendo prevalecer mi capacidad de ejercicio,
          en forma espontánea y voluntaria, <DynamicInput>declaro bajo juramento</DynamicInput>:
          {"\n"}
          {"\n"}
          Que, los pagos que realizo a favor de la <DynamicInput>Empresa Inmobiliaria &amp; Constructora Piura Norte SRL</DynamicInput>, con
          RUC Nº 20610822330, por la adquisición de mi Lote de Terreno ubicado en {terreno},
          del Proyecto Inmobiliario Piura Alegre, son producto de mis ingresos que percibo como {ocupacion},
          formulando la presente declaración, en virtud del principio de presunción de veracidad previsto en
          los artículos IV numeral 1.7 y 42º de la Ley del Procedimiento Administrativo General - Ley Nº 27444,
          sujetándome a las acciones legales y/o penales que correspondan en caso de resultar falso lo que
          declaro.
          {"\n"}
          Para mayor constancia firmo la presente, en señal de buena fe y conformidad, en Piura {formattedDate}.
        </Text>
        <Text style={styles.date}>
          Piura, {formattedDate}
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

export default DeclaracionJurada;
