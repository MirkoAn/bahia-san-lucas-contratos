import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Table, { TitularTable } from "../molecules/Table";

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    textDecoration: "underline",
  },
  text: {
    margin: 14,
    marginBottom: 8,
    fontSize: 9,
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
    justifyContent: "flex-end",
    fontFamily: "Noto Sans",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 0,
    marginRight: "auto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
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

const Subtitle = ({ children }) => (
  <Text style={{ fontFamily: "Helvetica-Bold" }}>
    {children}
  </Text>
);

const Pagare = ({ name, lastName, dni, totalAmount, address, isConyuge, conyugeName, conyugeLastName, conyugeDni }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>PAGARÉ</Text>
        <Text style={styles.text}>Importe: S/. {totalAmount}</Text>
        <Text style={styles.text}>
          Debo/debemos y pagaré/pagaremos solidaria e incondicionalmente, a la orden de INMOBILIARIA &amp; CONSTRUCTORA PIURA NORTE S.R.L.
          (en adelante LA INMOBILIARIA), o a quien este último hubiera transferido este Pagaré, en el local de la INMOBILIARIA de la ciudad donde se
          firmó o en el lugar en que se presente a cobro, la suma de {totalAmount} SOLES, suma
          adeudada por mi/nuestra parte a LA INMOBILIARIA por obligaciones contraídas a mi/nuestra entera satisfacción, sin lugar a reclamo de ninguna
          especie, para cuyo fiel y exacto cumplimiento obligo/obligamos todos mis/nuestros bienes habidos y por haber, en la mejor forma de derecho,
          en especial los que se encuentren a disposición de LA INMOBILIARIA de forma directa o indirecta.
          {"\n"}
          En caso de incumplimiento, se devengará y aplicará, desde la fecha de vencimiento, la tasa de interés compensatorio vigente más alta fijada
          por el Banco Central de Reserva del Perú, aplicable para obligaciones vencidas de acuerdo al tipo de facilidad que nos ha sido otorgada.
          Adicionalmente al referido interés compensatorio, encontrándose vencido el presente título, pagaré/pagaremos automáticamente y sin
          necesidad de requerimiento previo alguno, el interés moratorio, conforme a lo dispuesto en el artículo 1242 de Código Civil, por todo el tiempo
          que demore su pago, con la tasa máxima efectiva anual vigente fijada por el Banco Central de Reserva del Perú para operaciones activas de
          plazo similar, así como las comisiones y gastos previstos en su tarifario, el mismo que es exhibido al público y que desde ya
          declaro/declaramos conocer. En caso de ejecución, pagaré/pagaremos, además de los intereses, comisiones y gastos, los gastos notariales,
          judiciales, extrajudiciales, costos y costas del proceso y otros si los hubiere, que determine LA INMOBILIARIA. Las tasas de interés
          compensatorias y moratorias antes señaladas se calcularán sobre la base de 360 días, estando sujetas a variación y serán las que determine
          el Banco Central de Reserva del Perú, según su tarifario.
          {"\n"}
          El presente pagaré es de naturaleza mercantil y está sujeto a las disposiciones de la Ley de Títulos Valores y demás normas que le sean de
          aplicación y al Proceso Único de Ejecución u otro proceso del Código Procesal Civil.
          {"\n"}
          LA INMOBILIARIA podrá entablar ejecución para su cobro donde lo tuviere por conveniente, a cuyo efecto renuncio/renunciamos al fuero del
          domicilio y a cuantos puedan favorecerme/favorecernos en proceso judicial y fuera de él.
          {"\n"}
          Para todos los efectos de este pagaré señalo/señalamos mi/nuestro domicilio en la dirección que más abajo se indica, donde se me/nos
          enviarán los avisos y se harán las notificaciones judiciales del caso, salvo cuando por escrito haya/hayamos informado a LA INMOBILIARIA,
          un cambio de domicilio, y siempre que el nuevo domicilio esté ubicado dentro del radio urbano de la ciudad.
          {"\n"}
          Este título no requerirá de Protesto por falta de pago, procediendo su ejecución por el sólo mérito de haber vencido su plazo y no haber sido
          prorrogado, sin embargo, el tenedor queda facultado a protestarlo por falta de pago, en cuyo caso asumiré/mos los gastos y comisiones que
          tal diligencia notarial o de formalidad sustitutoria correspondiente. Esta diligencia del protesto podrá ser hecha mediante notificación que se
          curse al domicilio del Emitente consignado en este Pagaré; salvo que se opte por la formalidad sustitutoria de ley.
          {"\n"}
          Siempre que no exista impedimento legal o acuerdo expreso con LA INMOBILIARIA, en caso de prepago, convenimos en abonar una
          comisión por gastos administrativos y una comisión por prepago, según el tarifario del Banco Central de Reserva del Perú para estas
          operaciones.
          {"\n"}
          Los impuestos y derechos que se originen de la obligación representada por este pagaré, salvo los que correspondan a LA INMOBILIARIA
          conforme a Ley, serán por mi/nuestro cargo y cuenta.
          LA INMOBILIARIA se reserva el derecho de prorrogar este pagaré cuando lo estime conveniente, por lo que acepto/aceptamos todas las
          anotaciones que en tal sentido haga en este título, ya sea por el importe total o cantidad menor, aun cuando las mismas no aparezcan
          suscritas por mí/nosotros.
        </Text>
        <Text style={styles.date}>
          Piura, ... de ........... del ....
        </Text>
        <Text break style={styles.text}>
          <Subtitle>
            EMITENTE/S
          </Subtitle>
          {"\n"}
          <Subtitle>
            PERSONA JURIDICA
          </Subtitle>
        </Text>
        <Table />
        <Text style={styles.text}>
          <Subtitle>
            PERSONA NATURAL
          </Subtitle>
        </Text>
        <TitularTable 
          name={name}  
          lastName={lastName} 
          dni={dni} 
          address={address}
          isConyuge={isConyuge} 
          conyugeName={conyugeName} 
          conyugeLastName={conyugeLastName} 
          conyugeDni={conyugeDni}
        />
        <Text style={styles.date}>
          Firma del titular
        </Text>
        <Text style={styles.date}>
          Firma del titular
        </Text>
      </Page>
    </Document>
  );
};

export default Pagare;
