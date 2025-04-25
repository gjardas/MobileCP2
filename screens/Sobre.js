import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Fernando.jpeg')} style={styles.image} />
        <Image source={require('../assets/Guilherme.jpeg')} style={styles.image} />
      </View>

      <Text style={styles.text}>
        Desenvolvido por Fernando Fontes RM555317 e Guilherme Jardim RM556814.
      </Text>

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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: '47%',
    height: 400,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  text: { fontSize: 16, textAlign: 'center', color: '#555', marginTop: 10 },
  buttonContainer: { width: '80%', marginTop: 20 },
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
});
