import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView, Text, View,
} from 'react-native';


import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginScreen =  NativeStackNavigationProp <RootStackParamList, 'login'>;
export default function Login() {
  const navigator = useNavigation<LoginScreen>();

  return (
    <SafeAreaView >
      <View className="m-10 p-2">
        
        <Pressable
          onPress={() => {
            navigator.navigate("mainscreen")
          }}>
          <Text>goto mainscreen</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}