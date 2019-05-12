import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function RegisterAs(props) {
  return (
    <View style={styles.container}>
      <View style={styles.notRegisterContainer}>
        <TouchableOpacity
          style={styles.buttonContainerReg}
          onPress={() => props.onPressHow("Empresa")}
        >
          <Text style={styles.buttonText}>Registrate como Empresa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainerReg}
          onPress={() => props.onPressHow("Transportista")}
        >
          <Text style={styles.buttonText}>Registrate como Transportista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // container:{
  //     flex:1,
  //     backgroundColor:'#BBDEFB',
  // },
  notRegisterContainer: {
    paddingVertical: 15,
    marginTop: 60,
    padding: 20
  },
  buttonContainerReg: {
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    marginBottom: 20
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18
  }
});

export default RegisterAs;
