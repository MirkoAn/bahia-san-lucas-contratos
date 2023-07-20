import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 10,
    marginRight: 12,
    marginTop: 2,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Noto Sans",
  },
  list: {
    marginLeft: 24,
    marginBottom: 12,
  },
});

const List = ({ children }) => <View style={styles.list}>{children}</View>;

export const Item = ({ children, number }) => (
  <View style={styles.item}>
    <Text
      style={{ ...styles.bulletPoint }}
    >
      {number + 1}.
    </Text>
    <Text
      style={{ ...styles.itemContent }}
    >
      {children}
    </Text>
  </View>
);

export default List;
