import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'
import axios from 'axios';

export default function RegisterClient() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();

  function callApi() {
    if (!name) 
      Alert.alert("Campo vazio", "O campo nome está vazio")
    else if (!number)
      Alert.alert("Campo vazio", "O campo número está vazio")
    else if (!address)
      Alert.alert("Campo vazio", "O campo endereço está vazio")
    else {
      axios.post('http://192.168.0.113:2000/registerUser', { name, number, address })
      .then(function (response) {
        Alert.alert('Sucesso', "Usuário criado com sucesso")
        console.log(response.success);
      })
      .catch(function (error) {
        Alert.alert('Ops...', 'Houve algum problema')
        console.log(error);
      });
    }
  }

  return(
    <View style={styles.container}>
      <TextInput 
        placeholder='Nome do cliente'
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput 
        placeholder='Número de telefone'
        keyboardType={'phone-pad'}
        maxLength={9}
        onChangeText={text => setNumber(text)}
        style={styles.input}
        />
      <TextInput 
        keyboardType={'email-address'}
        placeholder='Endereço'
        onChangeText={text => setAddress(text)}
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
  )
}

