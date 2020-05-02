import React, { useState, useEffect } from "react"
import { Text, View, Button, FlatList, StyleSheet } from "react-native"
import styles from '../styles/pagesInfo'

export default function Client({ navigation }) {
  const [clients, setClient] = useState();

  useEffect(() => {
    let client = [
      { id: 1, name: 'Raquel', numberphone: '99999999', address: "SP" },
      { id: 2, name: 'Hinata', numberphone: '99999999', address: "SP" },
      { id: 3, brand: 'Maria', numberphone: '99999999', address: "SP" },
      { id: 4, brand: 'Kushima', numberphone: '989898989', address: "SP" },
      { id: 5, brand: 'Tenten', numberphone: '989898989', address: "SP" },
      { id: 6, brand: 'Sakura', numberphone: '989898989', address: "SP" },
      { id: 7, brand: 'Nike', numberphone: '989898989', address: "SP" },
      { id: 8, brand: 'Puma', numberphone: '989898989', address: "SP" },
      { id: 9, brand: 'Adidas', numberphone: '989898989', address: "SP" },
      { id: 10, brand: 'Adidas', numberphone: '989898989', address: "SP" },
    ]
    setClient(client);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id.toString()}
        data={clients}
        renderItem={({item}) => (
          <View style={styles.renderFlatList}>
            <Text style={styles.title}> Cliente: {item.name} </Text>
            <Text style={styles.info}> Número de telefone: {item.numberphone} </Text>
            <Text style={styles.info}> Endereço: R$ {item.address}</Text>
          </View>
        )}
      />
    </View>
  )
}