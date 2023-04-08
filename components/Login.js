import { View, Text, ImageBackground, StyleSheet,Image,  TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
//import CheckBox from '@react-native-community/checkbox';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    
    navigation.navigate('MainHome');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/back.png')} style={styles.backgroundImage}>
        <View style={styles.overlayContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.overlayImage} />
          <Text style={styles.text}>W safe</Text>

          {/*login*/}
          <View style={styles.transparentBox}>
            <View style={styles.formContainer}>
                <Text style={styles.text2}>Login</Text>
                <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password}  onChangeText={setPassword}  />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

            <View style={styles.rememberMeContainer}>
              <Text style={styles.rememberMeText}>Remember Me</Text>
              <TouchableOpacity style={styles.googleSignInButton}>
                <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
              </TouchableOpacity>
             </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayImage: {
    resizeMode: "contain",
    width: 86,
    height: 78,
    left: 149,
    top: 63,
    position: "absolute",
  },
  text: {
    // Added styles for the text component
    position: "absolute",
    width: 139,
    height: 52,
    left: 133,
    top: 141,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "400",
    fontSize: 40,
    lineHeight: 49,
    color: "#FFFFFF",
  },
  formContainer: {
    width: "100%",
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 15,
    marginLeft: 25,
    marginTop: 20,
    backgroundColor: "white",
  },
  transparentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",

    width: 350,
    height: 450,
    left: 0,
    top: 100,
    opacity: 0.7,
    borderRadius: 10,
  },
  text2: {
    // Added styles for the text component
    position: "absolute",
    width: 109,
    height: 40,
    left: 100,
    top: -40,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "400",
    fontSize: 40,
    lineHeight: 41,
    color: "#FFFFFF",
  },


  button: {
    flexDirection:'column',
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    margin:30,
  },
  buttonText: {
    color: 'white',
    backgroundColor:'blue',
    height:40,
    width:300,
    fontSize: 20,
    paddingTop:5,
    textAlign:'center',
    borderRadius:15
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
 // rememberMeContainer: {
   // backgroundColor: 'transparent',
   // borderWidth: 0,
   // paddingLeft: 0,
   // marginLeft: 0,
   // marginRight: 0,
  //},
  rememberMeText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 10,
  },
  googleSignInButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)"',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  googleSignInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
 
