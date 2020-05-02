import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from '../styles/styles'

export default function RegisterProducts() {
  const [brand, setBrand] = useState();
  const [Amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  return(
    // <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <TextInput 
          placeholder='Marca'
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput 
          placeholder='Quantidade'
          keyboardType={'numeric'}
          maxLength={100}
          onChangeText={text => setNamber(text)}
          style={styles.input}
          />
        <TextInput 
          placeholder='Preço'
          keyboardType={'decimal-pad'}
          onChangeText={text => setNamber(text)}
          style={styles.input}
          />
        <TextInput 
          keyboardType={'numeric'}
          placeholder='Tamanho'
          onChangeText={text => setAddress(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    // </KeyboardAvoidingView>
  )
}
