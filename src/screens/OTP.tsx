import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView, Text, View,
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


export type OTPScreen =  NativeStackNavigationProp <RootStackParamList, 'otpscreen'>;
export default function OTP() {

  const navigator = useNavigation<OTPScreen>();
  return (
    <SafeAreaView >
      <View className="m-10 p-2">
      <Pressable
       onPress={() => {
         navigator.navigate("login")
       }}>
        <Text>welcome</Text>
       </Pressable>
      
      </View>

    </SafeAreaView>
  );
}