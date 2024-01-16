import React, { Component, useState } from 'react';
import { View, Text,StyleSheet, ScrollView, Pressable, TextInput, Image , TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';

const ProfilePage = () => {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [address,setAddress] = useState('');
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [inputBgColor, setInputBgCOlor] = useState('#FCEBE8');

  const editProfile = () => {
    if (!fName) {
      Toast.showWithGravity(
        'Please Enter first name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else if (!lName) {
      Toast.showWithGravity(
        "Please enter last name",
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else if (!email) {
      Toast.showWithGravity(
        'Please enter email address',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else if (!reg.test(email)) {
      Toast.showWithGravity(
        'please enter proper email address',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else if (!number) {
      Toast.showWithGravity(
        'please enter your phone number',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else if (!address) {
      Toast.showWithGravity(
        'please enter your address',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return;
    } else {
      Toast.showWithGravity(
        'Edit Succesfully',
        Toast.SHORT,
        Toast.BOTTOM,
      )
  
    }
  };
    return (
    <View style={styles.mainContainer}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image 
           source={require('../assets/Images/profilepic.webp')}
           style={{
             height: 44,
             width: 44,
             borderRadius: 65,
           }}/>
           <Text style={styles.topBarText}>Profile</Text>
        </View>
        <View
          style={{
            marginTop:20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}>
          <Pressable >
            <Image
              source={require('../assets/Images/profile2.jpeg')}
            
              style={styles.profileImage}
            />
          </Pressable>
        </View>
    
         <View style={styles.txtView}>
          <Text>First Name</Text>
         </View>
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <View style={styles.column}>
            <TextInput
             style={styles.input}
             placeholder={'Jane'}
             placeholderTextColor={'#000'}
             
             onChangeText={value => setFName(value)}
            />
          </View>
         </View>
       
       
         <View style={styles.txtView}>
          <Text>Last Name</Text>
         </View>
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <View style={styles.column}>
            <TextInput
             style={styles.input}
             placeholder={'Cooper'}
             placeholderTextColor={'#000'}
             onChangeText={value => setLName(value)}
            />
          </View>
         </View>

         <View style={styles.txtView}>
          <Text>Email</Text>
         </View>
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <View style={styles.column}>
            <TextInput
             style={styles.input}
             placeholder={'Jane.c@gmail.com'}
             placeholderTextColor={'#000'}
             onChangeText={value => setEmail(value)}
            />
          </View>
         </View>
         <View style={styles.txtView}>
          <Text>Phone Number</Text>
         </View>
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <View style={styles.column}>
            <TextInput
             style={styles.input}
             onChangeText={value => setNumber(value)}
             keyboardType={'number-pad'}
             placeholderTextColor={'#000'}
             placeholder={'02 9392 9092'}
            />
          </View>
         </View>
         <View style={styles.txtView}>
          <Text>Mailing Address</Text>
         </View>
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <View style={styles.column}>
            <TextInput
             style={styles.input}
             placeholder={'St.23/43, Victoria Park '}
             placeholderTextColor={'#000'}
             onChangeText={value => setAddress(value)}
            />
          </View>
         </View>
       
      </View>
     
      
    </ScrollView>
    <View style={styles.btnView}>
      <TouchableOpacity style={styles.button} onPress={editProfile}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      </View>
    </View>
    );
  
}

const styles = StyleSheet.create({
  mainContainer: {

    flex:1
   
  },
  container:{
    width: '100%',
    backgroundColor:'#fff',
  
  },
  topBar:{
    width:'100%',
    marginTop:75,
    marginLeft:20,
    paddingBottom:10,
    alignItems:'center',
    flexDirection:'row',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 2,
    
  
   
  },
  topBarText:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:95
 
  },


  column: {
    width: '90%',
    height:42,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#ccc',
    marginVertical:12,
    backgroundColor:"#FCEBE8"
  },
  input: {
     paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 80,
    resizeMode: 'cover',
  },
  txtView:{
   marginLeft:20,
   marginTop:6
  },
  btnView:{
    position:'absolute',
    bottom:5,
    width:"100%",
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    backgroundColor: '#DA5E42',
    padding: 16,
    width: '90%',
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
});


export default ProfilePage;
