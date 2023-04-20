import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

export const BottomTabs = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Book" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="My Rentals" component={Home}  options={{
          tabBarLabel: 'My Rentals',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
          // tabBarBadge: 3,
        }} />
      <Tab.Screen name="Account" component={Profile} options={{ headerShown: false }}/>
      <Tab.Screen name="Recourse" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};