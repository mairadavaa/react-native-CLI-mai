import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text, TouchableOpacity,
} from 'react-native';
import Login from "../screens/Login";
import OTP from "../screens/OTP";
import { BottomTabs } from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen
        name="otpscreen"
        component={OTP}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text>back to login</Text>
              </TouchableOpacity>
            );
          },
        })}
      />
      <AuthStack.Screen
        name="mainscreen"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};