import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Navbar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"red",
      width:"100%",
      flexDirection:"row",
      justifyContent:"center",
      padding:15,
    },
    content: {
      color:"white",
      fontSize:22,

    }
  });
  
  