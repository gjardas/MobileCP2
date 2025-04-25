import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Saúde Mental App</Text>

      <Text style={styles.description}>
        A saúde mental é essencial para o bem-estar geral. Cuidar da saúde mental não apenas ajuda a melhorar a qualidade de vida, mas também tem um impacto positivo na nossa saúde física, emocional e social. Compreender e tratar os desafios emocionais é fundamental para levar uma vida equilibrada e feliz. Não hesite em buscar apoio e utilizar recursos disponíveis.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Imagem1.jpg')} style={styles.image} />
        <Image source={require('../assets/Imagem2.png')} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={() => navigation.navigate('Dicas')}>
          <Text style={styles.buttonText}>Ver Dicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={() => navigation.navigate('Formulario')}>
          <Text style={styles.buttonText}>Acessar Formulário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF9800' }]} onPress={() => navigation.navigate('Recursos')}>
          <Text style={styles.buttonText}>Recursos Úteis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.buttonText}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '48%',
    height: 400,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
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