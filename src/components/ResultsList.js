import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Text>{results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
