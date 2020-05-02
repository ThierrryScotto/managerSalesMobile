import React, { useEffect, useState } from "react"
import { Text, View, Button, TouchableHighlight, Alert, StyleSheet } from "react-native"

export default function Test({ navigation }) {
  const [users, setUsers] = useState(0)
  const [products, setProducts] = useState(0)
  const [sales, setSales] = useState(0)
  const [totalSales, setTotalSales] = useState(0)

  return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.push("Client")}>
          <View style={styles.viewText}>
            <Text style={styles.text}> Usuários cadastrados: 14</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.push("Stoke")}>
          <Text style={styles.text}> Produtos no estoque: 10</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.push("Stoke")}>
          <Text style={styles.text}> Total de vendas: R$ 144,90</Text>
        </TouchableHighlight>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f47373"
  },
  text: {
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#f47373",
    fontSize: 24,
    padding: 14,
    paddingLeft: 0,
    fontWeight: 'bold',
    color: '#d9e3f0',
    backgroundColor: "#1787cf"
  }
})