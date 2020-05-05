import React, { useState, useEffect } from "react"
import { Text, View, Button, FlatList, StyleSheet } from "react-native"
import styles from '../styles/pagesInfo'

export default function Client({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
		fetch("http://192.168.0.113:2000/getProducts")
		.then( res => res.json())
			.then(res => {
        setProducts(res)
			}) 
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={products}
        renderItem={({item}) => (
          <View style={styles.renderFlatList}>
            <Text style={styles.title}> Produto: {item.brand} </Text>
            <Text style={styles.info}> Quantidade: {item.amount} </Text>
            <Text style={styles.info}> R$ {item.price}</Text>
            <Text style={styles.info}> Tamanho: {item.size}</Text>
          </View>
        )}
      />
    </View>
  )
}