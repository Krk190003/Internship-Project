import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';


const URL: string = "https://www.sabre.com/";

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{width:"100%", height:"100%"}}>
        <WebView
        source={{uri: URL}}
        onLoad={() => console.log("isloaded")}
        />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
