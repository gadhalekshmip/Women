
import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Linking, FlatList } from 'react-native';

const YouTubeLinksScreen = () => {
  // Data for the list of YouTube video links
  const youtubeLinks = [
    { id: 1, title: 'Women SAFETY Gadgets & Apps - Highly Recommended | TechBar', link: 'https://youtu.be/iHxzsAkN98U' },
    { id: 2, title: 'Personal Safety & Self-Defense Products | soothingsista', link: 'https://youtu.be/TZEzK9q9Feo' },
    { id: 3, title: '25 Safety Tips For Women', link: 'https://youtu.be/MF7reW-hkJE' },
    { id: 4, title: 'WHO - Violence against women: Strengthening the health system response', link: 'https://youtu.be/Qc_GHITvTmI' },
    { id: 5, title: 'Tiktok safety tips and hacks', link: 'https://youtu.be/M2slsVSIaZE' },
    { id: 6, title: 'Mental Health & Women | Shania Clark | TEDxYellowknifeWomen', link: ' https://youtu.be/i4Q_bL-63oc' },
   
  ];

  // Function to handle when a YouTube link is tapped
  const handleLinkPress = (link) => {
    Linking.openURL(link);
  };

  // Render item for the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleLinkPress(item.link)}>
      <Image style={styles.thumbnail} source={{ uri: `https://img.youtube.com/vi/${item.link.split('/').pop()}/0.jpg` }} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.youtubeLogoContainer}>
        <Image style={styles.youtubeLogo} source={require('../assets/images/yt.png')} />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={youtubeLinks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'rgba(255, 169, 210, 0.2)',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  thumbnail: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  youtubeLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  youtubeLogo: {
    width: 50,
    height: 50,
    opacity: 0.8,
  },
});

export default YouTubeLinksScreen;
