import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.itemName}>{item.name}</Text>
      <Image  source={{ uri: item.image }} style={[styles.itemImage, { width: '80%', height: 100 , marginLeft: '10%'}]} resizeMode="contain" image/>
      <Text style={[styles.itemDescription, { fontSize: 14,color: '#666',}]}>{item.description}</Text>
      <Text style={styles.itemUtilization}>{item.pemanfaatan}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemUtilization: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default DetailScreen;
