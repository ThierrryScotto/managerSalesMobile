import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from '../styles/styles'
import axios from "axios";

export default function RegisterProducts({ navigation }) {
  const [brand, setBrand] = useState();
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  
  function callApi() {
    if (!brand) 
      Alert.alert("Campo vazio", "O campo marca está vazio")
    else if (!amount)
      Alert.alert("Campo vazio", "O campo quantidade está vazio")
    else if (!price)
      Alert.alert("Campo vazio", "O campo preço está vazio")
    else if (!size)
      Alert.alert("Campo vazio", "O campo tamanho está vazio")
    else {
      axios.post('http://192.168.0.113:2000/registerProduct', { brand, amount, price, size })
      .then((response) => {
        Alert.alert('Sucesso', "Usuário criado com sucesso");
      })
      .catch((error) => {
        Alert.alert('Ops...', 'Houve algum problema')
      });
    }
  }

  return(
    // <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <TextInput 
          placeholder='Marca'
          onChangeText={text => setBrand(text)}
          style={styles.input}
        />
        <TextInput 
          placeholder='Quantidade'
          keyboardType={'numeric'}
          maxLength={100}
          onChangeText={text => setAmount(text)}
          style={styles.input}
          />
        <TextInput 
          placeholder='Preço'
          keyboardType={'decimal-pad'}
          onChangeText={text => setPrice(text)}
          style={styles.input}
          />
        <TextInput 
          keyboardType={'numeric'}
          placeholder='Tamanho'
          onChangeText={text => setSize(text)}
          style={styles.input}
        />
        <TouchableOpacity 
          onPress={() => callApi()}
          style={styles.button}>
          <Text style={styles.textButton}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    // </KeyboardAvoidingView>
  )
}
