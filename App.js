import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';

import {WebView} from 'react-native-webview';

//import Geolocation from "@react-native-community/geolocation";


//Both of these options only work on iOS
const geoConfig = {
    skipPermissionRequests: true,
    authorizationLevel: 'always'
};


export default function App() {
    let [location, setLocation] = useState({lat: 0, long: 0});
    let [errorMessage, setError] = useState("");
    let winWidth = Dimensions.get('window').width;
    let winHeight = Dimensions.get('window').height / 2;





    return (
        <View style={styles.container}>
            <Text>Hello, React!</Text>
            <WebView source={{uri: 'http://192.168.1.74:8080'}}
                     style={{marginTop: 10, width: winWidth, height: winHeight}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
