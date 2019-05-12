import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

function LoginLogo(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/Octocat.png")}
          />
          <Text style={styles.title}>
            An app made for myApp using React Native
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8BC34A"
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "#212121",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  }
});

export default LoginLogo;
