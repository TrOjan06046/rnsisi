import React from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../Images/logo.png')}
                />
                <Text style={styles.title}> A template made for SISI using React Native</Text>
            </View>
            <View style={styles.formContainer}>
            <View style={styles.containerform}>
        <StatusBar barStyle="light-content"/>
       <TextInput
            placeholder="username or email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
        />
        <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input)=> this.passwordInput = input}
        />

      <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.props.navigation.navigate('drawerStack')}>
         <Text style={styles.buttonText}> LOGIN </Text>
       </TouchableOpacity>
      </View>
            </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    containerform: {
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 100,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText:{
        textAlign: 'center',
        color:'#fff',
        fontWeight: '700',
    },
})
