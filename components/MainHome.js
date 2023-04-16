import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, IconButton, Title, Divider,Text } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MessageScreen from './MessageScreen';
import ChatScreen from './ChatScreen';
import YouTubeLinksScreen from './YouTubeLinksScreen';

const Stack = createNativeStackNavigator();
const HomeTab = () => {
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
        <Divider />
        <View style={styles.otherServicesContainer}>
          <View style={styles.contactIcon}>
            <IconButton icon="car" color="#000" size={40}  onPress={() => { }}/>
            <Text style={styles.otherServiceTitle}>Book a Cab</Text>
          </View>
          <View style={styles.contactIcon}>
            <IconButton icon="phone" color="#000"size={40} onPress={() => {  }} />
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

const ChatsTab = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Messages" component={MessageScreen} options={{ headerShown: false, headerBackTitleVisible: false }}  />
     <Stack.Screen name ="Chat" component={ChatScreen} options={({route}) => ({
        headerTitle: route.params.userName, headerTitleAlign: 'center' ,headerBackTitleVisible: false,
      })}/>
    </Stack.Navigator>
  );
};

const CounselTab = () => {
  return (
   <YouTubeLinksScreen  />
  );
};
const Tab = createMaterialTopTabNavigator();

const MainHome = () => {
 /* const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };*/
  return (
    /*<View style={styles.headerContainer}>
      <View style={styles.wsafeLogo}>
        <Image source={require('../assets/images/logo.png')} style={styles.wsafeLogoImage} />
        <Text style={styles.wsafeLogoText}>Wsafe</Text>
  </View>*/
    <NavigationContainer independent={true} style= {styles.headerContainer}>
    <Tab.Navigator screenOptions={{
            tabBarItemStyle: { flexDirection:"row",justifyContent: "space-between",marginBottom:10,marginTop:10,  
            paddingTop: 5    },
            tabBarStyle: { backgroundColor: "#FFA9D2"  }  ,
            }}  >
      <Tab.Screen name="Home" component={HomeTab}  options={{
                tabBarLabel:'Home',
                tabBarIcon: ({ color }) => (  <IconButton icon="home" size={30} color={color} />),
              }} />
      <Tab.Screen name="Chats" component={ChatsTab}  options={({route})=>({
                /*tabBarVisible : getTabBarVisibility(route),*/
                tabBarLabel:'Chat',
                tabBarIcon: ({ color }) => (  <IconButton icon="chat" size={30} color={color} />),
               
              })} /> 
      <Tab.Screen name="Counsel" component={CounselTab}  options={{
                tabBarLabel:'Counsel',
                 tabBarIcon: ({ color }) => ( <IconButton icon="account-multiple" size={30} color={color} />),
              }} />
    </Tab.Navigator>
  </NavigationContainer>
 

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

export default MainHome;
