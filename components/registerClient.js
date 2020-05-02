import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'
import axios from 'axios';

export default function RegisterClient() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();

  function callApi() {
    axios.get('https://localhost:2500/resgisterUser')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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

