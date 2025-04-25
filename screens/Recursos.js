import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

export default function Recursos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recursos úteis</Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Imagem7.png')} style={styles.image} />
        <Image source={require('../assets/Imagem8.jpg')} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196F3' }]}
          onPress={() => Linking.openURL('https://www.cvv.org.br/')}
        >
          <Text style={styles.buttonText}>Acesse o CVV</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={() => Linking.openURL('https://www.who.int/mental_health/en/')}
        >
          <Text style={styles.buttonText}>Guia da OMS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF5722' }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  imageContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10 },
  image: { width: '48%', height: 400, borderRadius: 12, resizeMode: 'cover' },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '47%',
    height: 400,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
