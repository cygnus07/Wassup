import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface MessageProps {
    message: {
      text: string; 
    };
  }
  
  const Message: React.FC<MessageProps> = ({ message }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    messagesList: {},
    messageContainer: {},
    messageText: {}
})


export default Message;