import {
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
  
Font.register({
  family: "Noto Sans",
  src: "https://fonts.gstatic.com/s/notosans/v28/o-0IIpQlx3QUlC5A4PNb4g.ttf",
});

  
const styles = StyleSheet.create({
  wrapper: {
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans",
    fontWeight: 400,
  },
  row: {
    flexDirection: "row",
    border: "0.5px solid black",
  },
  fullColumn: {
    width: "100%",
    paddingLeft: "4px",
  },
  column1: {
    width: "65%",
    paddingLeft: "4px",
  },
  column2: {
    width: "35%",
    paddingLeft: "5px",
    borderLeft: "0.5px solid black",
  },
});

export const TitularTable = ({ name, lastName, dni, address, isConyuge, conyugeName, conyugeLastName, conyugeDni }) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.column1}>TITULAR: {name} {lastName}</Text>
          <Text style={styles.column2}>DNI Nº: {dni}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fullColumn}>DOMICILIO: {address.domicilio}</Text>
        </View>
        {
          isConyuge && (
            <View style={styles.row}>
              <Text style={styles.column1}>CONYUGE: {conyugeName} {conyugeLastName}</Text>
              <Text style={styles.column2}>DNI: {conyugeDni}</Text>
            </View>
          )
        }  
      </View>
    </>
  );
};
  

const Table = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.fullColumn}>DENOMINACIÓN / RAZÓN SOCIAL:</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}></Text>
          <Text style={styles.column2}>RUC Nº</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fullColumn}>DOMICILIO:</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fullColumn}>REPRESENTANTES:</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}>NOMBRE:</Text>
          <Text style={styles.column2}>DNI:</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}>NOMBRE:</Text>
          <Text style={styles.column2}>DNI:</Text>
        </View>
      </View>
    </>
  );
};
  
export default Table;
