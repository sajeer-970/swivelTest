import 'react-native-gesture-handler';
import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                marginTop:44,
                height: 60,
                width: '100%',
                flexDirection: 'row',
                padding:10,
                alignItems: 'center',
                borderBottomColor: '#f4f4f4',
                borderBottomWidth: 1,
                }}>
              <Image
                source={require('../assets/Images/profilepic.webp')}
                style={{
                  height: 44,
                  width: 44,
                  borderRadius: 65,
                }}
              />
              <View style={{marginLeft:10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#111',
                }}>
                Jane Cooper
               </Text>
               <Text
                style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#111',
                }}> jane.c@gmail.com
                </Text>
              </View>
              </View>
              
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}>
      <Drawer.Screen
        name="Logout"
         options={{
            headerShown: false,
            drawerLabel: 'Logout',
            drawerLabelStyle:{
            color:'red'
            },
           drawerIcon: () => (
              <Image
                source={require('../assets/icon/Logout.png')}
                style={{width: 20, height: 20,tintColor:'red'}}
              />
            ),
          }}
        component={Main}/>
     </Drawer.Navigator>
   );
};

export default DrawerNavigator;
