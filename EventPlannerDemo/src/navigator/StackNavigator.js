import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Parent from '../screen/Parent';
import Posts from '../screen/Posts';
import { HomePage } from '../screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomePage"
           component={HomePage} />
          <Stack.Screen name="Posts"
           component={Posts} 
           options={{headerShown: false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default AppNavigator;
