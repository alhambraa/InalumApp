import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
    <NavStack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName="Home">
      <NavStack.Screen name="Home" component={Home} />
      <NavStack.Screen name="Cart" component={Cart} />
      
    </NavStack.Navigator>
)

const TabStack = createBottomTabNavigator();
const TabStackScreen = () => (
  <TabStack.Navigator
  name="Home"
  component={NavStackScreen}
  options={{
    tabBarIcon: ({ color, focused }) => (
      <AntIcon name={"home"} color={color} size={focused ? 24:20} />
    )
  }}
/>

<TabStack.Screen
  name="Cart"
  component={NavStackScreen}
  options={{
    tabBarIcon: ({ color, focused }) => (
      <AntIcon name={"book"} color={color} size={focused ? 24:20} />
    )
  }}
/>
  </TabStack.Navigator>
)

const Navigation = () => (
    <NavigationContainer>
      <TabStackScreen />
    </NavigationContainer>
)
  
export default Navigation;