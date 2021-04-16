import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Image} from "react-native-elements";

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //doesn't want the login page to be in stack we want to replace if user is logged in
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    },[])

    const signIn =()=>{
        auth.signInWithEmailAndPassword(email, password).catch(error=>alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light"/>
            <Image 
                source={{
                    uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
                }}
                style={{width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autofocus type="email" value={email} onChangeText={text=>setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text=>setPassword(text)} onSubmitEditing={signIn}/>
            </View>

            <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
            <Button containerStyle={styles.button} type="outline" title="Register" onPress={()=> navigation.navigate('Register')}/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor: 'white',
    },

    inputContainer:{
        width: 300,

    },

    button:{
        width: 200,
        marginTop:10,
    },  
})
