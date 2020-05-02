import React from "react"
import { Text, View, Button } from "react-native"

export default function Login({ navigation }) {
  return (
    <View>
      <Button 
        title='Press me'
        onPress={() => navigation.push("Clients") }
      />
    </View>
  )
}