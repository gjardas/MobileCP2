import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Formulario({ navigation }) {
  const [nome, setNome] = useState('');
  const [sentimento, setSentimento] = useState('');

  const handleSubmit = () => {
    alert(`Olá, ${nome}. Sentimos que você está se sentindo: ${sentimento}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Imagem5.png')} style={styles.image} />
        <Image source={require('../assets/Imagem6.jpeg')} style={styles.image} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descreva seus sentimentos"
        value={sentimento}
        onChangeText={setSentimento}
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
  image: { width: '47%', height: 400, borderRadius: 10, resizeMode: 'cover' },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#f5f5f5'
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
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
