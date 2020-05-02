import React, { useState, useEffect } from "react"
import { Text, View, Button, FlatList, StyleSheet } from "react-native"
import styles from '../styles/pagesInfo'

export default function Stoke({ navigation }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    let prod = [
      { id: 1, brand: 'Nike', amount: 10, price: '21,20', size: 42 },
      { id: 2, brand: 'Puma', amount: 2, price: '50,99', size: 35 },
      { id: 3, brand: 'Adidas', amount: 0, price: '100', size: 52 },
      { id: 4, brand: 'Nike', amount: 10, price: '21,20', size: 42 },
      { id: 5, brand: 'Puma', amount: 2, price: '50,99', size: 35 },
      { id: 6, brand: 'Adidas', amount: 0, price: '100', size: 52 },
      { id: 7, brand: 'Nike', amount: 10, price: '21,20', size: 42 },
      { id: 8, brand: 'Puma', amount: 2, price: '50,99', size: 35 },
      { id: 9, brand: 'Adidas', amount: 0, price: '100', size: 52 },
      { id: 10, brand: 'Adidas', amount: 0, price: '100', size: 52 },
    ]
    setProducts(prod);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={({item}) => (
          <View style={styles.renderFlatList}>
            <Text style={styles.title}> Produto: {item.brand} </Text>
            <Text style={styles.info}> Quantidade: {item.amount} </Text>
            <Text style={styles.info}> Preço: R$ {item.price}</Text>
            <Text style={styles.info}> Tamanho: {item.size}</Text>
          </View>
        )}
      />
    </View>
  )
}