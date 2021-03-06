import React from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

function Register(props) {
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
          ref={input => (props.emailInput = input)}
          style={styles.input}
          onChangeText={value => {
            props.handleChangeText(value, "email");
          }}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => props.passwordConfirmInput.focus()}
          ref={input => (props.passwordInput = input)}
          style={styles.input}
          onChangeText={value => {
            props.handleChangeText(value, "password");
          }}
        />
        <TextInput
          placeholder="Confirma Contraseña"
          secureTextEntry
          returnKeyType="go"
          ref={input => (props.passwordConfirmInput = input)}
          style={styles.input}
          onChangeText={value => {
            props.handleChangeText(value, "confirmPassword");
          }}
        />
        <TouchableOpacity
          onPress={props.handleRegister}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#BBDEFB"
  //   },
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
  }
});

export default Register;
