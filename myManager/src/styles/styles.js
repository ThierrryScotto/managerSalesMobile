import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2c3e50",
  },

  input: {
    marginBottom: 10,
    height: 60,
    width: 380,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  
  button: {
    height: 60,
    width: 380,
    borderRadius: 10,
    backgroundColor: "#1787cf",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default styles;