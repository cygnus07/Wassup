import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import Header from './Header'
import Message from './Message';

interface Message {
    text: string;
    // Other properties as needed (e.g., sender, timestamp)
  }
  

export default function ChatScreen() {
    const [Messages, setMessages] = useState([
        {text: "Hey buddy!"},
        {text: "How u doin mate?"},
        {text: "I m doing well bud"},
    ]);
  return (
        <SafeAreaView style={styles.container}>
             {/* <View style={styles.header}>
                <Text style={styles.headerTitle}>Chat Screen</Text>
             </View> */}
             <Header />
             <FlatList
        style={styles.messagesList}
        data={Messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    messagesList: {
        flex: 1,
        padding: 15
    }
})