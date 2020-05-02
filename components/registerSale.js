import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native'
import styles from '../styles/styles'

export default function RegisterSales() {
  const [name, setName] = useState();
  const [namber, setNamber] = useState();
  const [address, setAddress] = useState();

  return(
    <View style={styles.container}>
      <TextInput 
        placeholder='Número do cliente'
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput            // Listar os produtos e escolher com tipo um selectBox
        placeholder='Número de telefone'
        keyboardType={'phone-pad'}
        maxLength={9}
        onChangeText={text => setNamber(text)}
        style={styles.input}
        />
      <TextInput 
        keyboardType={'numeric'}
        placeholder='Quantidade'
        onChangeText={text => setAddress(text)}
        style={styles.input}
      />
      <TextInput 
        keyboardType={'numeric'}
        placeholder='Tamanho'
        onChangeText={text => setAddress(text)}
        style={styles.input}
      />
      <TextInput 
        keyboardType={'numeric'}
        placeholder='Valor total'
        onChangeText={text => setAddress(text)}
        style={styles.input}
      />
      <TextInput 
        keyboardType={'numeric'}
        placeholder='Data de pagamento'
        onChangeText={text => setAddress(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
