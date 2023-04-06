import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { itemId } = route.params;

  console.log(result);

  const getResult = async (itemId) => {
    const response = await yelp.get(`/${itemId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(itemId);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.details}>
        Reviews:
        {result.review_count} Rating: {result.rating}
      </Text>
      <Text style={styles.details}>Price: {result.price}</Text>
      <Text style={styles.details}>Number: {result.phone}</Text>

      <FlatList
        style={styles.flatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    margin: 8,
    fontSize: 12,
  },
  image: {
    width: 260,
    height: 200,
    margin: 6,
    borderRadius: 5,
  },
  flatlist: {
    margin: 8,
  },
});

export default ResultsShowScreen;
