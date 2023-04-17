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
  const handleForgot=() =>{

  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/back.png')} style={styles.backgroundImage}>
        <View style={styles.overlayContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.overlayImage} />
          <Text style={styles.text}>W safe </Text>

          {/*login*/}
          <View style={styles.transparentBox}>
            <View style={styles.formContainer}>
                <Text style={styles.text2}>Login</Text>
                <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password}  onChangeText={setPassword}  />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>     
                </TouchableOpacity>
               {/* <TouchableOpacity style={styles.button} onPress={handleForgot}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>*/}
                <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.orLine} />
              </View>

            <View style={styles.googleSignInButtonContainer}>
              
              <TouchableOpacity style={styles.googleSignInButton}>
              <Image source={require('../assets/images/google.png')} style={styles.googleIcon} />
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
    zIndex:10,
  },
  formContainer: {
    width: "100%",
    marginTop: 50,
   // zIndex:30,
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
    elevation:30,
  },
  text2: {
    
    position: "absolute",
    width: 109,
    height: 40,
    left: 133,
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
    margin:10,
    marginBottom:-5,
    elevation:30
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
    color: 'darkblue',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 10,
  },
  googleSignInButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    width: 300,
    height:40,
    left:25,
    
  },
 
  googleSignInButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)"',
    paddingVertical: 10,
    borderRadius: 300,
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
    marginRight:5,
  },
  googleSignInButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
 
