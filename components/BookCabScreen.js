import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image, StyleSheet } from 'react-native';

const BookCabScreen = () => {
  // Define an array of cab booking websites
  const cabBookingWebsites = [
    {
      name: 'Uber',
      url: 'https://www.uber.com/in/en/',
      image: require('../assets/user/uber.png'), 
    },
    {
      name: 'Ola',
      url: 'https://book.olacabs.com/',
      image: require('../assets/user/ola3.jpg'), 
    },
    {
      name: 'SheTaxi',
      url: 'https://play.google.com/store/apps/details?id=com.shetaxi.rider&hl=en&gl=US&pli=1',
      image: require('../assets/user/she.jpg'), 
    },
    {
      name: 'Lyft',
      url: 'https://ride.lyft.com/',
      image: require('../assets/user/lyft2.jpg'), 
    },
   
  ];

  // Function to handle onPress event of cab booking link
  const handleCabBookingLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book a Cab</Text>
      <Text style={styles.subHeading}>Choose a cab booking website:</Text>
      {cabBookingWebsites.map((website, index) => (
        <TouchableOpacity
          key={index}
          style={styles.websiteContainer}
          onPress={() => handleCabBookingLinkPress(website.url)}
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


export default BookCabScreen ;
