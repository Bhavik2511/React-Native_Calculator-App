import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../Assets/calculator.png'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const IntroScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                    <Image source={logo} style={styles.innerimg}/>
                    <Text style={styles.text}>Calculator</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomtext}>by. Bhavik</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'column',
        height:'100%',
        width: '100%',
        backgroundColor: '#252525',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    inner: {
       top:200,
       alignItems: 'center',
    },
    innerimg:{
        width :120,
        height:120,
        marginBottom: 20,
    },
    text:{
        fontSize: 40,
        color: 'white',
        fontWeight: '500',
    },
    bottom:{
        position: 'absolute',
        bottom: 20,
    },
bottomtext:{
    color: 'white',
    fontSize:25,
    fontWeight: '300',
},
})

export default IntroScreen