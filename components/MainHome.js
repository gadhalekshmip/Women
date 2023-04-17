import React from 'react';
import { StyleSheet} from 'react-native';
import { IconButton } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MessageScreen from './MessageScreen';
import ChatScreen from './ChatScreen';
import YouTubeLinksScreen from './YouTubeLinksScreen';
import BookCabScreen from './BookCabScreen';
import { useNavigation } from '@react-navigation/native';
import Home2 from './Home2';

const Stack = createNativeStackNavigator();
const HomeTab = () => {
  const navigation = useNavigation();
  return (
    <Home2 />
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
      <Tab.Screen name="Chats" component={ChatsTab}  options={()=>({
              /*  tabBarVisible : false,*/
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
