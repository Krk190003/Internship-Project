import { View, Text, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
import React from 'react'

const URL: string = "https://www.sabre.com/";

export default function Siteview() {
  return (
    <View style={styles.siteView}>
    <WebView
      source={{uri: URL}}
      onLoad={() => console.log("isloaded")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    siteView:{
        width:"100%",
        flex:1, 
        backgroundColor:"red",
    }
})