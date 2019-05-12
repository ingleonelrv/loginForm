import React from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Correo electronico"
          returnKeyType="next"
          onSubmitEditing={() => props.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={props.handleChangeEmail}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          returnKeyType="go"
          ref={input => (props.passwordInput = input)}
          style={styles.input}
          onChangeText={props.handleChangePassword}
        />
        <TouchableOpacity
          onPress={props.handleSubmit}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      {/* <HorizontalSeparator /> */}
      <View style={styles.newContainer}>
        <Text style={styles.notRegisterText}>
          Aun no eres usuario?{" "}
          <Text style={styles.link} onPress={props.onPressHere}>
            Registrate AQUI
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "#FFFFFF",
    color: "#212121",
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#388E3C",
    paddingVertical: 15
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18
  },
  notRegisterText: {
    color: "#212121",
    marginVertical: 20,
    paddingHorizontal: 10,
    textAlign: "center",
    opacity: 0.9
  },
  newContainer: {
    marginBottom: 10
  },
  link: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700"
  }
});

export default Login;
