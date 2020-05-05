import React, { useState, useEffect } from "react"
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Image  } from "react-native"
import App from "./src/components/index"

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isUser, setIsUser] = useState(false)

  function checkLogin() {
    if (email === "T" && password === "T") {
      setIsUser(true);
    } else 
      Alert.alert('Ops...', "Usuário ou senha inválidos")
  }

  if (!isUser) {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/assets/logo.png')}
          style={styles.logo}
        />
  
        <TextInput
          placeholder='Digite seu email'
          onChangeText={ text => setEmail(text) }
          style={styles.input}
          />
        
        <TextInput
          placeholder='Digite sua senha'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={ text => setPassword(text) }
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={ () => checkLogin()}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return ( <App />)
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#2c3e50",
	},
	
	logo: {
		width: 150,
		height: 150,
		borderRadius: 100,
		marginBottom: 10
	},

	input: {
		marginTop: 10,
		padding: 10,
		width: 300,
		backgroundColor: "#fff",
		fontSize: 16,
		fontWeight: 'bold',
		borderRadius: 7,
	},

	button: {
		width: 300,
		height: 45,
		backgroundColor: '#3498db',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 12,
		borderRadius: 4,
	},

	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff'
	}
})