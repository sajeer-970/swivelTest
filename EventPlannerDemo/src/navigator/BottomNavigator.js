import {View, Text, Image} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage';
import ProfilePage from '../screen/ProfilePage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor:Colors.black
      }
    }}>
      <Bottom.Screen
        name="Home"
        component={HomePage}
         options={{
          headerShown: false,
           tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../assets/icon/Home.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#035efc' : 'white',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
              source={require('../assets/icon/boxIcon.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#035efc' : 'white',
                }}
              />
            );
          },
        }}
      />
     
    </Bottom.Navigator>
  
    
  );
};

export default BottomNavigator;