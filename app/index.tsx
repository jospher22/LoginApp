import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'black'
  },
  image: {
    width: 250,
    height: 250,
    marginTop: -150,
    marginBottom: -25,
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    height: 40,
    borderColor: "black",
    backgroundColor: 'white',
    borderWidth: 1.3,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  button: {
    width: "25%",
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
});