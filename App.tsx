import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

import HomeScreen from './screen/home/Home';
import NotificationScreen from './screen/notification/Notification';
import Tools from './screen/tools/Tools';
import Orders from './screen/orders/Orders';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tools">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
        <Drawer.Screen name="Tools" component={Tools} />
        <Drawer.Screen name="Orders" component={Orders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
