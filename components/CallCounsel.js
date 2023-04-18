import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image, StyleSheet } from 'react-native';

const CallCounsel= () => {

  const callCounselWebsites = [
    {
      name: 'Betterhelp',
      url: 'http://www.betterhelp.com/',
      image: require('../assets/user/betterhelp.jpg'), 
    },
    {
      name: 'Softmind',
      url: 'https://www.softmindindia.com/Appointments/',
      image: require('../assets/user/softmind.jpg'), 
    },
    {
      name: 'Felicity care',
      url: 'https://www.felicity.care/',
      image: require('../assets/user/felicity.jpg'), 
    },
    {
      name: 'Good Therapy',
      url: 'https://www.goodtherapy.org/',
      image: require('../assets/user/download.jpg'), 
    },
   
  ];

  // Function to handle onPress event of cab booking link
  const handleCallCounselLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Call For Counselling</Text>
      <Text style={styles.subHeading}>Choose a counselling website:</Text>
      {callCounselWebsites.map((website, index) => (
        <TouchableOpacity
          key={index}
          style={styles.websiteContainer}
          onPress={() => handleCallCounselLinkPress (website.url)}
        >
          <Image style={styles.websiteImage} source={website.image} />
          <Text style={styles.websiteName}>{website.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor:'rgba(255, 169, 210, 0.2)',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:35,
  },
  subHeading: {
    fontSize: 20,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  websiteContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignSelf: 'flex-start',
    marginLeft:30,
  
  },
  websiteImage: {
    width: 105,
    height: 110,
    marginRight: 40,
    borderRadius: 4,
  },
  websiteName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});


export default CallCounsel;