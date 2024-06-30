import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Setiap 5 detik

    const handleConnectivityChange = (isConnected) => {
      if (isConnected) {
        syncDataWithServer();
      }
    };

    const unsubscribe = NetInfo.addEventListener((state) => {
      handleConnectivityChange(state.isConnected);
    });

    // Bersihkan interval dan unsubscribe saat komponen dibongkar
    return () => {
      clearInterval(intervalId);
      unsubscribe();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.49:5000/items');
      if (JSON.stringify(response.data) !== JSON.stringify(data)) {
        setData(response.data);
        await saveDataLocally(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
      await loadDataFromLocal();
      setLoading(false);
    }
  };

  const saveDataLocally = async (data) => {
    try {
      await AsyncStorage.setItem('localData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data locally:', error.message);
    }
  };

  const loadDataFromLocal = async () => {
    try {
      const localData = await AsyncStorage.getItem('localData');
      if (localData) {
        setData(JSON.parse(localData));
      }
    } catch (error) {
      console.error('Error loading data from local storage:', error.message);
    }
  };

  const saveUnsyncedData = async (data) => {
    try {
      await AsyncStorage.setItem('unsyncedData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving unsynced data:', error.message);
    }
  };

  const syncDataWithServer = async () => {
    try {
      const unsyncedData = await AsyncStorage.getItem('unsyncedData');
      if (unsyncedData) {
        const data = JSON.parse(unsyncedData);
        // Kirim data ke server
        await axios.post('http://192.168.1.49:5000/sync-items', data);
        // Hapus data setelah berhasil disinkronkan
        await AsyncStorage.removeItem('unsyncedData');
      }
    } catch (error) {
      console.error('Error syncing data with server:', error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error && !data.length) {
    return (
      <View style={styles.centeredView}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default HomeScreen;
