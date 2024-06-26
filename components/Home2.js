import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, IconButton,  Divider,Text } from 'react-native-paper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookCabScreen from './BookCabScreen';
import CallCounsel from './CallCounsel';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Home2 = () => {
    const navigation = useNavigation();
    const handleTap = () => {
        navigation.push('BookCabScreen')
      };
    const handleTap2 = () => {
        navigation.push('CallCounsel')
      };
    return (
      
        <ScrollView style={styles.container}>
        <View style={{flex:1}}>
          <Image source={require('../assets/images/empower_women.png')}style={styles.image} resizeMode="cover" />
          <Text style={styles.text1}>Empower Yourself</Text>
        </View>
         <Card style={styles.cardContainer} >
          <Card.Title title="Quick Contacts" />
          <Divider />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.contactIconContainer}>
              <View style={styles.contactIcon}>
                <IconButton icon="account-circle" size={60} onPress={() => {}} />
                <Text style={styles.contactTitle}>Contact 1</Text>
              </View>
              <View style={styles.contactIcon}>
                <IconButton icon="account-circle" size={60} onPress={() => {}} />
                <Text style={styles.contactTitle}>Contact 2</Text>
              </View>
              <View style={styles.contactIcon}>
                <IconButton icon="account-circle" size={60} onPress={() => {}} />
                <Text style={styles.contactTitle}>Contact 3</Text>
              </View>
              <View style={styles.contactIcon}>
                <IconButton icon="account-circle" size={60} onPress={() => {}} />
                <Text style={styles.contactTitle}>Contact 4</Text>
              </View>
              <View style={styles.contactIcon}>
                <IconButton icon="account-circle" size={60} onPress={() => {}} />
                <Text style={styles.contactTitle}>Contact 5</Text>
              </View>
              
              {/* Add more contact icons here */}
            </View>
          </ScrollView>
        </Card>
        <Card style={styles.cardContainer}>
          <Card.Title title="Other Services" />

        {/* Add the BookCabScreen as a screen
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home2} />
            <Stack.Screen name="BookCabScreen" component={BookCabScreen} />
            
        </Stack.Navigator>*/}


          <Divider />
          <View style={styles.otherServicesContainer}>
            <View style={styles.contactIcon}>
              <IconButton icon="car" color="#000" size={40}   onPress={handleTap}/>
              <Text style={styles.otherServiceTitle}>Book a Cab</Text>
            </View>
            <View style={styles.contactIcon}>
              <IconButton icon="phone" color="#000"size={40} onPress={() => { handleTap2 }} />
              <Text style={styles.otherServiceTitle}>Call for Counselling</Text>
            </View>
        </View>
        </Card>
        <View style={{flex:1}}>
          <Image source={require('../assets/images/empower_women.png')}style={styles.image} resizeMode="cover" />
          <Text style={styles.text1}>Empower Yourself</Text>
        </View>
        <View style={{flex:1}}>
          <Image source={require('../assets/images/empower_women.png')}style={styles.image} resizeMode="cover" />
          <Text style={styles.text1}>Empower Yourself</Text>
        </View>
      </ScrollView>
    
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    bgcolor:{
      backgroundColor:'rgba(255, 169, 210, 0.2)'
    },
    text1:{
        position: 'absolute',
       // width: 189,
        //height: 39.71,
        //left: 19,
        //top: 239.76,
        bottom:30,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: 2,
        color: 'black'
  
    },
    image: {
      width: '100%',
      height: 200,
    },
    quickContactContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
    cardContainer: {
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor:'rgba(255, 169, 210, 0.2)',
     
    },
    otherServicesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 20,
    },
    
    contactIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginHorizontal: 10,
     
    },
    contactIcon: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    contactTitle: {
      fontSize: 14,
      marginTop: 5,
      bottom:10,
      textAlign: 'center',
    },
    
    otherServiceTitle: {
      fontSize: 14,
      marginLeft: 10,
      textAlign: 'center',
    },
    headerContainer: {
      backgroundColor: '#FFA9D2',
      elevation: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    headerTitle: {
      fontSize: 16,
      marginTop: 5,
    },
    headerIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
    },
    headerIcon: {
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 10,
    },
    headerIconTitle: {
      fontSize: 14,
      marginTop: 5,
      textAlign: 'center',
    },
    wsafeLogo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    wsafeLogoImage: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
    wsafeLogoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });
export default Home2;