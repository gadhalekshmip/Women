import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = ({ route }) => {
  const { userName } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat with {userName}</Text>
      {/* Render chat messages here */}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});
export default ChatScreen;