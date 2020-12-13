import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Splash, Login, Home, Cart,
} from './pages';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />

    </DrawerContentScrollView>
  );
}

function DreawerRouters() {
  return (

    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cart" component={Cart} />

    </Drawer.Navigator>

  );
}

const Drawer = createDrawerNavigator();
const App = () => {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={DreawerRouters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
