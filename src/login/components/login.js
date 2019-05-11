import React from 'react'
import { TextInput,Text, View, StyleSheet,TouchableOpacity, StatusBar,KeyboardAvoidingView } from 'react-native'
// import HorizontalSeparator from '../../sections/components/horizontalSeparator'
// import LoginLogo from './loginLogo'

function Login(props) {
    return (
        <View style={styles.container}>
        {/* <LoginLogo /> */}
            <View style={styles.formContainer}>
                <StatusBar backgroundColor='#BBDEFB' barStyle='light-content' />
                <TextInput
                    placeholder='Correo electronico'
                    returnKeyType='next' 
                    onSubmitEditing={()=>props.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={props.handleChangeEmail} 
                />
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input)=>props.passwordInput=input}
                    style={styles.input} 
                    onChangeText={props.handleChangePassword}
                />
                <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            {/* <HorizontalSeparator /> */}
            <View style={styles.newContainer}>
                <Text style={styles.notRegisterText}>Aun no eres usuario? <Text style={styles.link} onPress={props.onPressHere}>Registrate AQUI</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#BBDEFB',
    },
    formContainer:{
        padding:20,
    },
    input:{
       height:40,
       backgroundColor:'#FFFFFF',
       color:'#212121',
       marginBottom:10,
       paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#1976D2',
        paddingVertical:15
    },
    buttonText:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'700',
    },
    notRegisterText:{
        color:'#212121',
        marginVertical:20,
        paddingHorizontal:10,
        textAlign:'center',
        opacity:.9,
    },
    link:{
        color:'#1976D2',
        fontSize:16,
        fontWeight:'700'
    }
})

export default Login