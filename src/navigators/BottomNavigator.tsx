import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ACTIVE } from "nativewind/dist/utils/selector";
import { Image, Text, View } from "react-native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();


export const BottomTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ tintColor, image, focused }) => {
          if (route.name == 'Book') {
            image = require('../assets/booking.png')

          }
          if (route.name == 'My Rentals') {
            image = require('../assets/carLogo.png')
          }
          if (route.name == 'Account') {
            image = require('../assets/user.png')
          }
          if (route.name == 'Recourse') {
            image = require('../assets/secure.png')
          }
          return (
            <Image
              source={image}
              style={{
                width: 25, height: 25,
              }}
            />
          )
        },
        // tabBarActiveTintColor: '#FF3002',
        // tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {

          fontSize: 10,
          fontWeight: '400',
          fontStyle: "normal"

        },
        tabBarStyle: {
          height: 89,
          backgroundColor: 'white',
          borderTopColor: 'grey',

        },

        tabBarItemStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 2,
          paddingBottom: 20,
          borderRadius: 30,
        },
        
        tabBarLabel: ({ tintColor, focused }) => {
          return focused
            ? (
              <Text style={{ fontSize: 12, color: "#FF3002" }} >{route.name}</Text>
            )
            : (<Text style={{ fontWeight: 'normal', fontSize: 10 }} >{route.name}</Text>)
        },

      })}
    >
      <Tab.Screen name="Book" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="My Rentals" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Recourse" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
    // <Tab.Navigator></Tab.Navigator>
  );
};