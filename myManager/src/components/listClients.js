import React, { useState, useEffect } from "react"
import { Text, View, Button, FlatList, StyleSheet } from "react-native"
import styles from '../styles/pagesInfo'

export default function Client({ navigation }) {
  const [clients, setClient] = useState([]);

  useEffect(() => {
		fetch("http://192.168.0.113:2000/getClients")
		.then( res => res.json())
			.then(res => {
        setClient(res)
			}) 
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={clients}
        renderItem={({item}) => (
          <View style={styles.renderFlatList}>
            <Text style={styles.title}> Cliente: {item.name} </Text>
            <Text style={styles.info}> Número de telefone: {item.phoneNumber} </Text>
            <Text style={styles.info}> Endereço: {item.address}</Text>
          </View>
        )}
      />
    </View>
  )
}