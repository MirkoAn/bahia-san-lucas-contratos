import React from "react";
import { Page, Text, Image, Document, StyleSheet, Font, View } from "@react-pdf/renderer";
import List, { Item } from "../molecules/List";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  wrapper: {
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginBottom: 36,
    lineHeight: 1.5,
  },
  subtitle: {
    fontSize: 10,
    marginLeft: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
    textDecoration: "underline",
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
    width: 100,
    height: 100,
    marginLeft: 0,
    marginRight: "auto",
  },
  additional: {
    fontSize: 10,
    margin: 12,
    textAlign: "justify",
    fontFamily: "Helvetica-Bold",
  },
  signature: {
    marginLeft: 12,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.5,
  },
  signature2: {
    marginLeft: 12,
    marginTop: 20,
    fontSize: 10,
    textAlign: "justify",
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
  detailContainer: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    border: "0.5px solid black",
  },
  fullColumn: {
    width: "100%",
    paddingLeft: "4px",
    fontFamily: "Helvetica-Bold",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  firstColumn: {
    width: "20%",
    paddingLeft: "8px",
  },
  column: {
    width: "20%",
    paddingLeft: "8px",
    borderLeft: "0.5px solid black",
  },
  batchText: {
    fontSize: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textAndMargin: {
    margin: 12,
    marginBottom: 100,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
    lineHeight: 1.5,
  }
});

Font.register({
  family: "Noto Sans",
  src: "https://fonts.gstatic.com/s/notosans/v28/o-0IIpQlx3QUlC5A4PNb4g.ttf",
});

const DynamicInput = ({ children}) => (
  <Text style={{ fontFamily: "Helvetica-Bold" }}>
    {children}
  </Text>
);

const Subtitle = ({ children }) => (
  <Text style={{ fontFamily: "Helvetica-Bold", textDecoration: "underline" }}>
    {children}
  </Text>
);

const resolutionDetails = [
  "Por incumplimiento en el pago de las cuotas pactadas.",
  "Por resolución unilateral de EL/LOS COMPRADOR(ES) que no está(n) en mora.",
  "Por incumplimiento de las obligaciones contractuales y causas imputables a EL/LOS COMPRADOR(ES).",
  "Por causa imputable a LA VENDEDORA."
];

const penaltyDetails = [
  "Se aplicará una penalidad equivalente al treinta por ciento (40.00%) de lo abonado al capital a la fecha de resolución del contrato, sin incluir intereses compensatorios y gastos administrativos, si la resolución se efectuara dentro de los tres meses de celebrado el presente contrato.",
  "Se aplicará una penalidad equivalente al sesenta por ciento (60.00%) de lo abonado al capital a la fecha de resolución del contrato sin incluir intereses compensatorios y gastos administrativos, si la resolución se efectuara entre el cuarto y sexto mes de celebrado el presente contrato.",
  "Se aplicará una penalidad equivalente al ochenta por ciento (80.00%) de lo abonado al capital a la fecha de resolución del contrato sin incluir intereses compensatorios y gastos administrativos, si la resolución se efectuara a partir del sétimo mes de celebrado el presente contrato y la fecha de comunicación de suscripción del contrato definitivo.",
  "Se aplicará una penalidad equivalente al cien por ciento (100%) de lo abonado al capital a la fecha de resolución del contrato sin incluir intereses compensatorios y gastos administrativos, por causa imputable a EL/LOS COMPRADOR(ES), si la resolución se efectuara dentro de los 30 días una vez comunicado a EL/LOS COMPRADOR(ES) la fecha de suscripción del contrato definitivo. Asimismo, se aplicará la presente penalidad si, aun sin mediar comunicación de desistimiento de la compraventa por parte de EL/LOS COMPRADOR(ES), no se cumpliera con suscribir el contrato de compraventa definitivo por causas imputables a EL/LOS COMPRADOR(ES)."
];

const noncomplianceDetails = [
  "Requerir el pago de las cuotas vencidas más los intereses compensatorios, moratorios y gastos administrativos correspondientes.",
  "Ejecutar el pagaré o cualquier otro título valor aceptado por EL/LOS COMPRADOR(ES), por cada una de las cuotas, por el solo vencimiento de su plazo, situación que EL/LOS COMPRADOR(ES) declara(n) conocer y aceptar.",
  "Resolver de pleno derecho el presente contrato, según lo establecido en el artículo 1430° del Código Civil, siempre que se haya incumplido con el pago de tres (03) cuotas consecutivas. en cuyo caso EL/LOS COMPRADOR(ES) faculta(n) a LA VENDEDORA a recibir la penalidad correspondiente conforme a lo establecido en la décimo sexta del presente contrato.",
];

const obligationDetails = [
  "Cuando EL/LOS COMPRADOR(ES) no cumpla(n) con firmar el contrato de compraventa definitivo según se indica en la cláusula cuarta y octava del presente contrato."
];


const expensesDetails = [
  "LA VENDEDORA transferirá a EL/LOS COMPRADOR(ES) el bien materia de la presente compraventa sin adeudar por éste ningún monto por concepto de impuestos, contribuciones, tasas, arbitrios, derechos y cualquier otro tributo en general.",
  "Respecto de las tasas, impuesto predial, arbitrios, derechos y cualquier otro tributo que corresponda, EL/LOS COMPRADOR(ES) asumirá(n) su pago a partir de que se le entregue dicho bien, para lo cual LA VENDEDORA presentará ante la Municipalidad el Acta de Entrega correspondiente y una copia del presente contrato.",
];

const Contrato = ({ name, lastName, dni, contractNumber, formattedDate, address, isConyuge, conyugeName, conyugeLastName, conyugeDni, terreno, metraje }) => {

  return (
    <Document>
      <Page style={styles.body} wrap>
        <View fixed>
          <Image
            style={styles.image}
            src="/assets/icon.png"
          />
        </View>
        <Text style={styles.title}>
        PROYECTO BAHIA DE SAN LUCAS
          {"\n"}
        COMPRAVENTA DE BIEN FUTURO
          {"\n"}
        PAGO FINANCIADO Nº {contractNumber}
        </Text>
        {
          isConyuge ? (
            <Text style={styles.text}>
              Conste, por el presente documento privado, el Contrato de COMPRAVENTA de Bien Futuro
              que celebran de una parte la empresa <DynamicInput>INMOBILIARIA &amp; CONSTRUCTORA PIURA
              NORTE SRL</DynamicInput>, con RUC N° 20610822330, debidamente representada por su Gerente
              General <DynamicInput>SR. CRISTHIAN HECTOR AGURTO EGOAVIL</DynamicInput>, con DNI Nº 46181105, con
              poderes debidamente inscritos en la Partida Electrónica N° 11266644 de los Registros
              Públicos de Piura, con domicilio para los presentes efectos en Av. Sánchez Cerro B-04
              Primer Piso - Urb. Chira Piura, distrito, provincia y departamento de Piura, a quien en lo
              sucesivo se denominará <DynamicInput>LA VENDEDORA</DynamicInput>; y de la otra parte, 
              el Sr(a). <DynamicInput>{name} {lastName}</DynamicInput>,
              identificado con DNI Nº {dni} y <DynamicInput>{conyugeName} {conyugeLastName}</DynamicInput> identificado con DNI Nº {conyugeDni }, 
              ambos con domicilio real en {address.domicilio.toUpperCase()}, departamento de {address.departamento}, 
              provincia de {address.provincia} y distrito de {address.distrito}, 
              a quien en adelante se le(s) denominará <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>.
            </Text>
          ) :
            <Text style={styles.text}>
            Conste, por el presente documento privado, el Contrato de COMPRAVENTA de Bien Futuro
            que celebran de una parte la empresa <DynamicInput>INMOBILIARIA &amp; CONSTRUCTORA PIURA
            NORTE SRL</DynamicInput>, con RUC N° 20610822330, debidamente representada por su Gerente
            General <DynamicInput>SR. CRISTHIAN HECTOR AGURTO EGOAVIL</DynamicInput>, con DNI Nº 46181105, con
            poderes debidamente inscritos en la Partida Electrónica N° 11266644 de los Registros
            Públicos de Piura, con domicilio para los presentes efectos en Av. Sánchez Cerro B-04
            Primer Piso - Urb. Chira Piura, distrito, provincia y departamento de Piura, a quien en lo
            sucesivo se denominará <DynamicInput>LA VENDEDORA</DynamicInput>; y de la otra parte, el Sr(a). <DynamicInput>{name} {lastName}</DynamicInput>,
            identificado con DNI Nº {dni}, estado civil Soltero(a), con domicilio
            real en {address.domicilio.toUpperCase()}, departamento de {address.departamento}, 
            provincia de {address.provincia} y distrito de {address.distrito}, 
            a quien en adelante se le(s) denominará <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>.
            </Text>
        }
        <Text style={styles.text}>
        Los términos y condiciones que se detallan por escrito a continuación, prevalecen
        respecto de cualquier comunicación verbal o escrita anterior que pudiera haberse dado
        entre las partes durante la negociación previa a la firma del presente documento,
        declarando ambas partes que el presente documento refleja el acuerdo final al que han
        llegado las partes.
        </Text>
        <Text style={styles.text}>
        Asimismo, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> indica(n) expresamente que ha recibido de 
          <DynamicInput> LA VENDEDORA </DynamicInput>de manera gratuita y previa a la firma del presente contrato, información
        documentada sobre el Proyecto de Casa de Campo, por lo que
        declara tener conocimiento de las características del futuro lote de terreno y del
        financiamiento de la operación; asimismo, acepta y reconoce que las firmas de los
        representantes legales de <DynamicInput>LA VENDEDORA</DynamicInput> podrán realizarse por medio electrónico y/o
        mecánico conforme consta al final del presente documento.
        </Text>
        <Text style={styles.textAndMargin}>
          <Subtitle>
          ANTECEDENTES
          </Subtitle>
          {"\n"}
          <DynamicInput>PRIMERA: LA VENDEDORA</DynamicInput> es propietaria de dos lotes de terreno con un área de 20 Ha,
        ubicado en el Sector Parte Alta - Pampa Congora, Distrito de Colán, provincia
        de Paita, departamento de Piura, el mismo que se encuentra inscrito ante el registro el Registro de Propiedad Inmueble de la Oficina Registral de Piura, cuya área, linderos y medidas perimétricas se hallan consignados en el referido documento Registral, con las siguientes características:
        </Text>
        <>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              {/* LOTE */}
              <Text style={styles.batchText}><DynamicInput>LOTE:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Número de lote */}
              <Text style={styles.batchText}><DynamicInput>02</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              {/* MANZANA */}
              <Text style={styles.batchText}><DynamicInput>MANZANA:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Número de manzana */}
              <Text style={styles.batchText}><DynamicInput>43</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              {/* SUPERFICIE */}
              <Text style={styles.batchText}><DynamicInput>SUPERFICIE:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Superficie */}
              <Text style={styles.batchText}><DynamicInput>100,000 M2</DynamicInput></Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.fullColumn}>CUADRO DE COORDENADAS UTM - DATUM WGS84 ZONA 17 SUR</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>VERTICE</Text>
              <Text style={styles.column}>LADO</Text>
              <Text style={styles.column}>DISTANCIA</Text>
              <Text style={styles.column}>ESTE (X)</Text>
              <Text style={styles.column}>NORTE (Y)</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>897</Text>
              <Text style={styles.column}>897-892</Text>
              <Text style={styles.column}>500</Text>
              <Text style={styles.column}>497668.2373</Text>
              <Text style={styles.column}>9442962.9915</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>892</Text>
              <Text style={styles.column}>892-891</Text>
              <Text style={styles.column}>200</Text>
              <Text style={styles.column}>497192.4879</Text>
              <Text style={styles.column}>9443116.8171</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>891</Text>
              <Text style={styles.column}>891-867</Text>
              <Text style={styles.column}>500</Text>
              <Text style={styles.column}>497254.0183</Text>
              <Text style={styles.column}>9443307.1174</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>867</Text>
              <Text style={styles.column}>867-897</Text>
              <Text style={styles.column}>200</Text>
              <Text style={styles.column}>497729.7677</Text>
              <Text style={styles.column}>9443153.2918</Text>
            </View>
          </View>
        </>        
        <>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              {/* LOTE */}
              <Text style={styles.batchText}><DynamicInput>LOTE:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Número de lote */}
              <Text style={styles.batchText}><DynamicInput>01</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              {/* MANZANA */}
              <Text style={styles.batchText}><DynamicInput>MANZANA:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Número de manzana */}
              <Text style={styles.batchText}><DynamicInput>43</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              {/* SUPERFICIE */}
              <Text style={styles.batchText}><DynamicInput>SUPERFICIE:</DynamicInput></Text>
              {/* Separación */}
              <Text style={styles.batchText}>&nbsp;&nbsp;</Text>
              {/* Superficie */}
              <Text style={styles.batchText}><DynamicInput>100,000 M2</DynamicInput></Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.fullColumn}>CUADRO DE COORDENADAS UTM - DATUM WGS84 ZONA 17 SUR</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>VERTICE</Text>
              <Text style={styles.column}>LADO</Text>
              <Text style={styles.column}>DISTANCIA</Text>
              <Text style={styles.column}>ESTE (X)</Text>
              <Text style={styles.column}>NORTE (Y)</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>867</Text>
              <Text style={styles.column}>867-868</Text>
              <Text style={styles.column}>200</Text>
              <Text style={styles.column}>497729.7677</Text>
              <Text style={styles.column}>9443153.2918</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>868</Text>
              <Text style={styles.column}>868-890</Text>
              <Text style={styles.column}>499.99</Text>
              <Text style={styles.column}>497791.2980</Text>
              <Text style={styles.column}>9443343.5922</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>890</Text>
              <Text style={styles.column}>890-891</Text>
              <Text style={styles.column}>200</Text>
              <Text style={styles.column}>497315.5486</Text>
              <Text style={styles.column}>9443497.4177</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.firstColumn}>891</Text>
              <Text style={styles.column}>891-867</Text>
              <Text style={styles.column}>499.99</Text>
              <Text style={styles.column}>497254.0183</Text>
              <Text style={styles.column}>9443307.1174</Text>
            </View>
          </View>
        </>
        <Text style={styles.text}>
          <DynamicInput>SEGUNDA:</DynamicInput> Sobre parte del terreno detallado en la cláusula precedente, 
          <DynamicInput>LA VENDEDORA</DynamicInput> desarrollará el Proyecto de Casa de Campo
        denominado <DynamicInput>BAHIA DE SAN LUCAS</DynamicInput>, en el cual se considera la existencia de 366 viviendas,
        entre las que se encuentra la proyectada como <DynamicInput>{terreno}</DynamicInput>, la misma que tendrá
        un área construida de <DynamicInput>{metraje}</DynamicInput>, tal como se señala en el
        documento denominado “Plano del Proyecto de Lotización de Casa de Campo” y del cual <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput>
        declara(n) tener pleno conocimiento.
        </Text>
        <Text style={styles.text}>
        El citado Proyecto de Casa de Campo se encuentra actualmente en proceso
        de elaboración, encontrándose pendiente su verificación, ajustes y final aprobación por
        parte de la Municipalidad Distrital de Colán, por lo que <DynamicInput>EL/LOS
        COMPRADOR(ES)</DynamicInput> desde ya manifiesta(n) su conocimiento, aceptación y conformidad
        con las modificaciones que se puedan introducir en el referido Proyecto de Casa de Campo, el cual incluye cambio de nomenclatura y área exactas del inmueble referido en el párrafo precedente.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput> indica(n) expresamente que ha(n) recibido por parte de <DynamicInput>LA VENDEDORA</DynamicInput>, 
        de manera gratuita y previa a la firma del presente contrato, la
        información necesaria para la decisión de firma del mismo, por lo que declara(n) tener
        conocimiento de las características del inmueble y del financiamiento de la operación.
        </Text>
        <Text style={styles.text}>
          <Subtitle>OBJETO DEL CONTRATO</Subtitle>
          {"\n"}
          <DynamicInput>TERCERO: </DynamicInput> Al amparo de lo dispuesto en el artículo 1534º del Código Civil, por el presente
        contrato, <DynamicInput>LA VENDEDORA </DynamicInput> se obliga a transferir, en favor de <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput> 
        la propiedad del Lote Futuro, a que se refiere la cláusula segunda de
        este documento, tal como quede definitivamente configurado. Por su parte, <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput> 
        se obliga(n) a pagar a <DynamicInput>LA VENDEDORA </DynamicInput> el monto total del precio
        pactado en la cláusula sétima, en la forma y oportunidad y lugar convenidos.
        </Text>
        <Text style={styles.text}>
        La presente COMPRAVENTA es AD CORPUS y comprende los suelos, usos, costumbres,
        servidumbres, entradas, salidas y todo cuanto de hecho y derecho corresponda al Lote
        Futuro que es materia del presente contrato, sin reserva ni limitación alguna por el
        presente documento.
        </Text>
        <Text style={styles.text}>
        Las partes se comprometen a celebrar dentro del plazo fijado en la cláusula siguiente, el
        Contrato de Compraventa definitivo sobre el inmueble descrito en la cláusula segunda,
        de acuerdo a los términos y condiciones establecidas en las cláusulas siguientes.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>CUARTA: </DynamicInput> Las partes declaran, de mutuo acuerdo, que el Contrato de Compraventa
        definitivo será celebrado siempre que <DynamicInput>LA VENDEDORA </DynamicInput> culmine la realización de las obras dentro del terreno señalado en la cláusula segunda y además, que <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput> hayan cancelado la totalidad de su lote de terreno, siendo ambas condiciones concurrentes; tras lo cual <DynamicInput>LA VENDEDORA </DynamicInput>previamente enviará de manera facultativa una
        comunicación escrita a la dirección física o dirección electrónica o teléfono celular
        proporcionado por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> para que este último se acerque a sus
        oficinas a suscribir el contrato antes indicado, otorgándole para ello un plazo de treinta (30)
        días calendario contados a partir de la recepción de la referida comunicación.
        </Text>
        <Text style={styles.text}>
        La inobservancia por parte de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> del plazo antes señalado,
        facultará a <DynamicInput>LA VENDEDORA </DynamicInput>para proceder conforme a lo dispuesto en la cláusula
        décimo quinta del presente documento.
        </Text>
        <Text style={styles.text}>
          <Subtitle>CONDICIÓN SUSPENSIVA</Subtitle>
          {"\n"}
          <DynamicInput>QUINTA: </DynamicInput>Ambas partes acuerdan que el presente Contrato de COMPRAVENTA de Bien
        Futuro está sujeto a la condición suspensiva de que llegue a existir el bien futuro
        señalado en la cláusula segunda y su
        correspondiente cancelación total del precio pactado. Por lo tanto, al
        celebrarse la Escritura Pública correspondiente, deberá especificarse el cumplimiento de
        esta condición.
        </Text>
        <Text style={styles.text}>
          <Subtitle>PRECIO DEL INMUEBLE</Subtitle>
          {"\n"}
          <DynamicInput>SEXTA: </DynamicInput>
        Las partes acuerdan que el precio de venta del inmueble es el indicado en el
        “Anexo Nº 01 - Tabla 1”, y que el mismo, se encuentra comprendido por el valor del lote de terreno y
        además del Crédito complementario con sus respectivos
        intereses compensatorios pactados.
        Asimismo, las partes acuerdan que el precio pactado es el que real y justamente corresponde al bien materia de este contrato.
        </Text>
        <Text style={styles.text}>
          <Subtitle>DE LA CLÁUSULA AD CORPUS</Subtitle>
          {"\n"}
          <DynamicInput>SÉTIMA: </DynamicInput>
        La compraventa del Lote Futuro, se realiza “AD CORPUS” y comprende el
lote con sus usos, costumbres y todo por cuanto de hecho y por derecho le corresponde.
No obstante, las partes hacen renuncia expresa a cualquier reclamación en relación a las
diferencias que pudieran detectarse respecto a sus extensiones y cualquier otro asunto,
haciéndose mutua y recíproca donación de cualquier diferencia, de conformidad con el
Art. 1577 del Código Civil. Asimismo, de existir la necesidad de modificar la nomenclatura
inicial del Lote Futuro, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> declara(n) y expresa(n) su
consentimiento para que realice dicho cambio.
        </Text>
        <Text style={styles.text}>
          <Subtitle>ENTREGA DEL INMUEBLE</Subtitle>
          {"\n"}
          <DynamicInput>OCTAVA: LA VENDEDORA </DynamicInput>
        se compromete a desplegar los esfuerzos necesarios para concluir las obras necesarias para una adecuada vivencia dentro del terreno donde se construirá el Proyecto de Casa de Campo, debiéndose tomar en cuenta que <DynamicInput>LA VENDEDORA</DynamicInput>, se compromete a proporcionar servicios básicos de agua y luz a sus clientes, así como la construcción de pistas principales y secundarias a nivel de afirmado, manzaneo y lotización, así como la orientación a nuestros clientes para la instalación de biodigestores como sistema alternativo para el alcantarillado y la construcción de un cerco vivo en todo el perímetro del terreno matriz con su respectivo pórtico de ingreso y caseta de vigilancia, debiendo proceder posteriormente a efectuar la entrega del inmueble descrito en la cláusula segunda a <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>
        en la fecha establecida en “Anexo N° 01 - Tabla 3”, siempre que se haya suscrito el contrato definitivo de compraventa, debiendo establecer que la independización de cada lotes del predio matriz, es por cuenta propia de cada cliente. Así como dejarse establecido que los gastos notariales por la celebración de la Escritura Publica corresponde por parte del <DynamicInput>COMPRADOR(ES)</DynamicInput> 
        </Text>
        <Text style={styles.text}>
      En caso <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> mantenga(n) impaga una o más cuotas, o
mantuviera(n) alguna obligación pendiente de pago frente a <DynamicInput>LA VENDEDORA</DynamicInput>, la entrega
del inmueble descrito en la cláusula segunda no procederá sino hasta la regularización
de la deuda pendiente, sin responsabilidad alguna para <DynamicInput>LA VENDEDORA</DynamicInput>.
        </Text>
        <Text style={styles.text}>
Se deja constancia que, la fecha prevista en el párrafo precedente para la conclusión de
las obras del proyecto y entrega de la vivienda y del lote de terreno descrito en la
cláusula segunda ES NETAMENTE REFERENCIAL, pudiendo prorrogarse
automáticamente cuando medien causas no imputables a las partes que impidan el
cumplimiento cabal de esta prestación.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> declara(n) tener conocimiento que el inmueble, descrito en
la cláusula segunda, que serán objeto de transferencia serán entregados por <DynamicInput>LA
VENDEDORA</DynamicInput> de acuerdo a la morfología que ha podido apreciar en el proyecto, estando <DynamicInput>LA VENDEDORA</DynamicInput> únicamente obligada a aquellos actos que se refieran directamente a
la conclusión de las obras de habilitación urbana con construcción simultánea; por tanto,
la obligación de entrega por parte de <DynamicInput>LA VENDEDORA </DynamicInput>no incluirá la realización de obras
de nivelación o limpieza especial del terreno.
        </Text>
        <Text style={styles.text}>
          <Subtitle>REPROGRAMACIÓN DE CUOTAS Y CONSECUENTE GASTO ADMINISTRATIVO:</Subtitle>
          {"\n"}
          <DynamicInput>NOVENA: </DynamicInput>  
Si <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> solicita(n) a <DynamicInput>LA VENDEDORA</DynamicInput> la
reprogramación de alguna de las cuotas del precio de venta detalladas en el “Anexo N°
01 - Tabla 2”, su solicitud será recibida y evaluada por <DynamicInput>LA VENDEDORA</DynamicInput> dentro de los
30 (treinta) días desde su recepción. Para solicitar la reprogramación <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> deberá(n) encontrarse al día en sus cuotas
        </Text>
        <Text style={styles.text}>
      La recepción de la misma, no implica aceptación de ninguna clase por parte de <DynamicInput>LA VENDEDORA</DynamicInput>. En el supuesto de ser aprobada, se cobrará la suma de <DynamicInput> S/ 25.00
(Veinticinco con 00/100 Nuevos Soles)</DynamicInput> por concepto de gastos administrativos y,
además, la reprogramación incorporará los intereses compensatorios convencionales
pactados
        </Text>
        <Text style={styles.text}>
  Queda claramente establecido que la solicitud de reprogramación no faculta a <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>
   al incumplimiento de pago de las cuotas del saldo del precio de venta
  que se encontraran pendientes a la fecha de su solicitud, toda vez que, la
  reprogramación debe ser aceptada por <DynamicInput>LA VENDEDORA </DynamicInput>y formalizada mediante
  documento suscrito por las partes.
        </Text>
        <Text style={styles.text}>
          <Subtitle>CESIÓN DE POSICIÓN CONTRACTUAL O CAMBIO DE TITULAR:</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO: </DynamicInput>  
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> podrá(n) ceder su posición contractual
a un tercero, siempre que medie la conformidad por parte de <DynamicInput>LA VENDEDORA</DynamicInput> de
acuerdo a lo establecido en el art. 1435 del código civil. Para ello, presentará(n) una
solicitud con los datos del cesionario.
        </Text>
        <Text style={styles.text}>
          La recepción de la misma, no implica aceptación de ninguna clase por parte de <DynamicInput>LA VENDEDORA</DynamicInput>, 
          se cobrará la suma de <DynamicInput>S/ 100.00 (Cien con 00/100 Soles)</DynamicInput> por concepto
    de gastos administrativos y, de ser calificado
    positivamente se procederá a la firma del contrato de cesión de posición contractual
    correspondiente, quedando el cesionario obligado a cumplir con los requisitos y
    asumir todos los derechos y obligaciones contenidos en el presente contrato.
        </Text>
        <Text style={styles.text}>
          <Subtitle>PREPAGO DEL SALDO DEL PRECIO DE VENTA:</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO PRIMERA: </DynamicInput>  
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> podrá(n) solicitar a 
          <DynamicInput> LA VENDEDORA</DynamicInput> realizar el prepago del saldo del precio de venta pendiente de pago, 
        en cuyo caso <DynamicInput>LA VENDEDORA</DynamicInput> preparará la liquidación correspondiente con la consiguiente reducción de
los intereses compensatorios generados al día de pago, y la liquidación de comisiones y
gastos derivados de las cláusulas contractuales pactadas entre las partes, sin que les
sean aplicables penalidades de algún tipo o cobros de naturaleza o efecto similar.
        </Text>
        <Text style={styles.text}>
          <Subtitle>TÍTULO DE CRÉDITO HIPOTECARIO NEGOCIABLE:</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO SEGUNDA: </DynamicInput>  
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> declara(n) que en caso el saldo del
precio del inmueble materia de compraventa fuera cancelado con un préstamo de una
institución financiera intermediaria, autorizará a dicha institución a emitir un Título de
Crédito Hipotecario Negociable cuya garantía hipotecaria será el inmueble que por esta
compraventa adquiere.
        </Text>
        <Text style={styles.text}>
          <Subtitle>LA RESOLUCÍÓN DEL CONTRATO:</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO TERCERO: </DynamicInput>
        Las partes acuerdan la resolución del contrato por las siguientes
causales:
        </Text>
        <List>
          {resolutionDetails.map((detail, i) => (
            <Item key={i} number={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.text}>
          <Subtitle>PENALIDAD POR RESOLUCIÓN DE CONTRATO.</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO CUARTA: </DynamicInput>
        En los supuestos establecidos en la cláusula anterior, se aplicará la
penalidad correspondiente según lo detallado a continuación:
        </Text>
        <List>
          {penaltyDetails.map((detail, i) => (
            <Item key={i} number={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.text}>
        Se entenderá por efectuado dicho desistimiento cuando <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> así
lo comunique(n) a <DynamicInput>LA VENDEDORA</DynamicInput>.
        </Text>
        <Text style={styles.text}>
Asimismo, se deja claramente establecido que, por la naturaleza jurídica de los intereses
compensatorios, así como de los gastos administrativos, éstos no estarán sujetos a
devolución a favor de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>.
        </Text>
        <Text style={styles.text}>
          <Subtitle>RESOLUCIÓN POR INCUMPLIMIENTO EN EL PAGO DE LAS CUOTAS</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO QUINTA: </DynamicInput>
        En caso de falta de pago o pago tardío de cualquiera de las cuotas
establecidas en el “Anexo N° 01 - Tabla N° 02”, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> deberá(n)
abonar a <DynamicInput>LA VENDEDORA</DynamicInput> los intereses moratorios correspondientes sobre el monto de
las obligaciones vencidas, sin que sea necesaria la intimación para constituirlo en mora,
así como las comisiones de cobranza y los intereses compensatorios legales que
pudieren generarse en este supuesto, en base a la tasa máxima que tiene establecida el
Banco Central de Reserva del Perú para las personas ajenas al sistema financiero, al día
de realización del pago.
        </Text>
        <Text style={styles.text}>
      Producido el incumplimiento del pago tres cuotas consecutivas o no, <DynamicInput>LA VENDEDORA</DynamicInput> podrá optar por:
        </Text>
        <List>
          {noncomplianceDetails.map((detail, i) => (
            <Item key={i} number={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.text}>
              Adicionalmente, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> se obliga(n) a pagar por concepto de
        Comisión de Cobranza la suma de <DynamicInput>S/ 35.00 (treinta y cinco con 00/100 Nuevos Soles) </DynamicInput>
        por cada mes moroso, en caso no cumpla con la fecha de pago prevista en su
        cronograma, dicho monto
        será cargado a su deuda desde el primer día de incumplimiento.
        </Text>
        <Text style={styles.text}>
        Esta comisión incluye la gestión por parte de <DynamicInput>LA VENDEDORA</DynamicInput> de hacer el seguimiento
        de las cuotas no pagadas en su fecha de vencimiento, gestión de cobranza, llamadas
        telefónicas, envío de notificaciones de requerimiento y cualquier otro servicio o gestión
        que <DynamicInput>LA VENDEDORA</DynamicInput> deba contratar o realizar para obtener el cumplimiento de la
        obligación de pago por parte de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>.
        </Text>
        <Text style={styles.text}>
          <Subtitle>POR RESOLUCIÓN UNILATERAL DE EL COMPRADOR QUE NO ESTÁ EN MORA:</Subtitle>
          {"\n"}
          <DynamicInput>DÉCIMO SEXTA: </DynamicInput> 
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> no moroso, puede solicitar la resolución
unilateral del presente contrato, mediante una solicitud dirigida a <DynamicInput>LA VENDEDORA</DynamicInput>,
expresando la causa de su decisión. Dicha solicitud deberá de ser respondida en el plazo
de 30 días calendario.
        </Text>
        <Text style={styles.text}>
Producida la contestación que se detalla en la cláusula anterior, <DynamicInput>LA VENDEDORA</DynamicInput> en un
plazo de 10 días hábiles deberá de realizar la devolución de ser el caso, del monto de
dinero cancelado, previa aplicación de lo establecido en la cláusula décimo sexta del
contrato.
        </Text>
        <Text style={styles.text}>
Adicionalmente, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> se obliga(n) a pagar por concepto de Gasto
Administrativo la suma de <DynamicInput>S/ 35.00 (treinta y cinco con 00/100 Nuevos Soles)</DynamicInput>. 
        </Text>
        <Text style={styles.text}>
          <Subtitle>RESOLUCIÓN POR INCUMPLIMIENTO DE LAS OBLIGACIONES CONTRACTUALES
Y CAUSAS IMPUTABLES A EL COMPRADOR</Subtitle>
          {"\n"}
          <DynamicInput>DECIMO SETIMA: </DynamicInput> 
        Ambas partes declaran que serán causales de resolución del
presente contrato, por parte de <DynamicInput>LA VENDEDORA</DynamicInput>, de acuerdo a lo estipulado en el
artículo 1429º del Código Civil, las siguientes:
        </Text>
        <List>
          {obligationDetails.map((detail, i) => (
            <Item key={i} number={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.text}>
      La resolución se producirá, luego que <DynamicInput>LA VENDEDORA</DynamicInput> comunique por conducto notarial
a la otra que quiere valerse de la cláusula resolutoria, otorgándole un plazo de 15 (quince)
días calendario para que cumpla con subsanar totalmente su incumplimiento, en cuyo caso
si <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> no realiza(n) la subsanación referida, se tendrá por resuelto
el contrato y <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> faculta(n) a <DynamicInput>LA VENDEDORA</DynamicInput> a aplicar la
penalidad establecida en la cláusula décimo sexta de este contrato
        </Text>
        <Text style={styles.text}>
Adicionalmente, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> se obliga(n) a pagar por concepto de
Gastos Administrativos la suma de <DynamicInput>S/ 35.00 (treinta y cinco con 00/100 Nuevos Soles)</DynamicInput>.
        </Text>
        <Text style={styles.text}>
          <Subtitle>RESOLUCIÓN POR CAUSA IMPUTABLE A LA VENDEDORA.</Subtitle>
          {"\n"}
          <DynamicInput>DECIMO OCTAVA: </DynamicInput> 
        En caso que la compraventa no llegara a celebrarse por causa
imputable a <DynamicInput>LA VENDEDORA</DynamicInput>, ésta devolverá a <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> toda suma
que haya sido entregada a cuenta del precio del bien, incluyendo los intereses moratorios
que se generen a la fecha.
Las moras generadas por inobservancia de los plazos o por exigencias, requisitos, actos
administrativos o cualquier otro acto de cualquiera de las autoridades en los
procedimientos administrativos iniciados por <DynamicInput>LA VENDEDORA</DynamicInput>, no se considerarán
causas imputables a <DynamicInput>LA VENDEDORA</DynamicInput>.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>LA VENDEDORA</DynamicInput> no responde de los daños y perjuicios resultantes de la inejecución de
la obligación, o de su cumplimiento parcial, tardío o defectuoso, por causas no
imputables, salvo que lo contrario esté previsto expresamente por la ley.
        </Text>
        <Text style={styles.text}>
          <Subtitle>DEVOLUCIÓN DEL PAGARÉ.</Subtitle>
          {"\n"}
          <DynamicInput>DECIMO NOVENA: </DynamicInput> 
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> reconoce(n) que <DynamicInput>LA VENDEDORA </DynamicInput> 
está facultada a remitir el pagaré suscrito a una entidad financiera para la gestión de
cobranza o en calidad de garantía, sin que ello implique que la entidad financiera realice
una cobranza directa. El pagaré que respalda las cuotas que hubieran sido canceladas
por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>, sufrirán los efectos contenidos en el artículo 17.3 de la
Ley N° 27287 Ley de Títulos Valores, el cual establece que “En el caso de los títulos
valores cuyo último tenedor sea una empresa del sistema financiero nacional, una vez
que éste sea pagado totalmente, podrá ser sustituido por microformas u otros medios
que permita la ley de la materia, destruyéndose el título valor cancelado.”
        </Text>
        <Text style={styles.text}>
          <Subtitle>GRAVÁMENES Y CARGAS</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO: </DynamicInput> 
        Al momento de celebrar el presente contrato, <DynamicInput>EL/LOS COMPRADOR(ES) </DynamicInput>
         declara(n), en forma expresa, tener perfecto conocimiento del estado
y situación en la que se encuentran los títulos de propiedad de los lotes de terreno
individualizados en las cláusulas primera y tercera de este mismo documento.
        </Text>
        <Text style={styles.text}>
      Sin perjuicio de ello, en el supuesto que <DynamicInput>LA VENDEDORA</DynamicInput> haya entregado a <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> la posesión del inmueble descrito en la cláusula segunda del
presente contrato sin que se haya realizado la cancelación total del precio convenido,
          <DynamicInput> EL/LOS COMPRADOR(ES)</DynamicInput> reconoce(n) que <DynamicInput>LA VENDEDORA</DynamicInput> conserva la propiedad
de dicho inmueble, comprometiéndose a realizar el pago del saldo pendiente en los
plazos establecidos en la cláusula sétima del presente contrato. Asimismo, en el
supuesto de enajenación del citado inmueble a favor de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> sin
que se haya verificado la cancelación total del precio convenido, éste reconoce el
derecho que asiste a <DynamicInput>LA VENDEDORA</DynamicInput> de constituir una reserva de dominio hasta por el
saldo pendiente de pago a la fecha de su constitución.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> declara(n) expresamente conocer que el terreno sobre el
que se construirán los inmuebles, será objeto de una garantía hipotecaria a ser otorgada
por <DynamicInput>LA VENDEDORA</DynamicInput> a favor de la institución financiera que financie la construcción del
proyecto inmobiliario descrito en la Cláusula segunda, comprometiéndose expresamente
          <DynamicInput>LA VENDEDORA</DynamicInput> a gestionar y obtener, por su cuenta y costo, la inscripción de la
cancelación y levantamiento de la hipoteca referida, una vez concluida la construcción
del referido proyecto inmobiliario e inscrita la independización de los inmuebles ante los
Registros Públicos de Piura.
        </Text>
        <Text style={styles.text}>
          <Subtitle>GASTOS Y TRIBUTOS</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO PRIMERA: </DynamicInput> 
        Ambas partes de común acuerdo pactan lo siguiente para efectos
del pago de los tributos:
        </Text>
        <List>
          {expensesDetails.map((detail, i) => (
            <Item key={i} number={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
        <Text style={styles.text}>
      Respecto de los gastos <DynamicInput>LAS PARTES</DynamicInput> acuerdan que, todos los gastos necesarios para la
formalización del título de propiedad a nombre de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>, tales
como minuta, asesoría legal, derechos notariales y registrales serán asumidos por
          <DynamicInput> EL/LOS COMPRADOR(ES)</DynamicInput>.
        </Text>
        <Text style={styles.text}>
      Asimismo, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> reconoce(n), como obligación a su cargo, el pago
de todos los impuestos municipales, cargos y comisiones aplicables que se devenguen
desde la fecha en que hayan sido notificados con la comunicación que les requiera a
acercarse a suscribir el respectivo Contrato de Compraventa; en ese sentido, <DynamicInput>LA VENDEDORA</DynamicInput> 
se compromete a alcanzar una liquidación del saldo a pagar por los
conceptos citados anteriormente, previa a la entrega del inmueble, la cual deberá ser
cancelada por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> en un plazo máximo de cinco (05) días hábiles de recibida dicha liquidación.
        </Text>
        <Text style={styles.text}>
          <Subtitle>FIDEICOMISO</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO SEGUNDA: </DynamicInput> 
        Por este medio se deja constancia que <DynamicInput>LA VENDEDORA</DynamicInput> podrá
celebrar un contrato de fideicomiso para el Proyecto en el que se construirá el inmueble
materia de la compraventa, con lo cual <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> manifiesta(n) su total
conformidad.
        </Text>
        <Text style={styles.text}>
          <Subtitle>DE LA PROTECCIÓN DE DATOS PERSONALES</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO TERCERA: </DynamicInput> 
        Para efectos del tratamiento de los datos personales que <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> proporcione(n) a <DynamicInput>LA VENDEDORA</DynamicInput>, se entiende que ésta será
responsable de dicho tratamiento, uso, almacenamiento y protección, de conformidad
con lo previsto por la Ley N° 29733, Ley de Protección de Datos Personales, y su
Reglamento, aprobado por Decreto Supremo N° 003-2013-JUS.
        </Text>
        <Text style={styles.text}>
      En ese sentido, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> otorga(n) su consentimiento libre, expreso,
previo e inequívoco para el tratamiento de los datos personales que por el presente
contrato haya facilitado o facilite posteriormente a <DynamicInput>LA VENDEDORA</DynamicInput> a través de
cualquier medio. Asimismo, <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> consiente(n) expresamente que
          <DynamicInput> LA VENDEDORA</DynamicInput> pueda ceder los datos personales a terceros en los términos y
condiciones anteriormente indicados. Los datos personales brindados por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> 
serán incorporados al fichero de Clientes de titularidad de <DynamicInput>LA VENDEDORA</DynamicInput>.
        </Text>
        <Text style={styles.text}>
      Los datos que <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> proporcione(n) serán utilizados en la gestión
administrativa y comercial del presente contrato y del futuro contrato de compraventa
relacionado a éste. En ese sentido, los datos brindados por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>
se mantendrán en el citado fichero mientras se consideren útiles con el cumplimiento del
objeto de los contratos citados anteriormente, autorizando éste que puedan ser utilizados
con el fin de enviarle información relacionada al cumplimiento de los mismos y/o
publicidad sobre las ofertas, promociones y recomendaciones que <DynamicInput>LA VENDEDORA </DynamicInput>
considere pertinentes.
        </Text>
        <Text style={styles.text}>
          <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> puede(n) ejercer los derechos de acceso, rectificación,
oposición y cancelación de los datos personales brindados a <DynamicInput>LA VENDEDORA</DynamicInput>,
derechos que podrá ejercer a través de comunicación formal que permita acreditar la
recepción por parte de ésta.
        </Text>
        <Text style={styles.text}>
En ese sentido, <DynamicInput>LA VENDEDORA</DynamicInput> reconoce la obligación de adoptar las medidas de
seguridad administrativas, técnicas, físicas y legales que permitan garantizar la
protección de los datos personales brindados por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>.
        </Text>
        <Text style={styles.text}>
          <Subtitle>SOLUCIÓN DE CONTROVERSIAS</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO CUARTA: </DynamicInput> 
        Queda expresamente establecido que en el improbable caso que
surja cualquier controversia o discrepancia en relación con la interpretación,
cumplimiento y/o ejecución de lo pactado en este documento, los suscribientes
resolverán dichas discrepancias o controversias de mutuo acuerdo y mediante el diálogo
directo, aplicando las reglas de la buena fe.
        </Text>
        <Text style={styles.text}>
      En caso las partes no arriben a ningún acuerdo, para todos los efectos del presente
contrato, quienes intervienen en el mismo renuncian expresamente al fuero de sus
domicilios y se someten a la jurisdicción de los Jueces y Tribunales del Distrito Judicial
de Piura, señalando como sus domicilios los indicados en la introducción del presente
contrato, en donde se les hará llegar todas las notificaciones y avisos a que hubiera
lugar.
        </Text>
        <Text style={styles.text}>
      Las partes intervinientes podrán cambiar de domicilio previa notificación hecha a la parte
contraria por medio de comunicación escrita con quince (15) días calendario de
anticipación, sin cuyo requisito no surtirá efecto legal alguno dicho cambio.
        </Text>
        <Text style={styles.text}>
          <Subtitle>DOMICILIO</Subtitle>
          {"\n"}
          <DynamicInput>VIGÉSIMO QUINTA: </DynamicInput> 
        En el supuesto de envío de cartas notariales, éstas serán dirigidas
al domicilio expresado por <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> en la introducción del presente
documento, quien ratifica dicha dirección como válida para recibir cualquier tipo de
comunicación relativa al presente contrato. En caso de ausencia de <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput>, 
la diligencia de entrega de la carta notarial se efectuará con la
persona que se encuentre en su domicilio en dicho momento o se dejará por debajo de la
puerta, aceptando desde ya <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> la validez de dicha notificación.
En caso que <DynamicInput>EL/LOS COMPRADOR(ES)</DynamicInput> variará(n) de domicilio deberá comunicarlo
mediante una declaración jurada, firmada por escrito, con quince (15) días calendario de
antelación, en las oficinas de <DynamicInput>LA VENDEDORA</DynamicInput>.
        </Text> 
        <Text style={styles.date}>
      Firman las partes en señal de conformidad en la ciudad de Piura, {formattedDate}.
        </Text>
        <Text style={styles.signature}>
        LA VENDEDORA
        </Text>
        <Text style={styles.signature2}>
        EL/LOS COMPRADOR(ES):
        </Text>
      </Page>
    </Document>

  );
};

export default Contrato;