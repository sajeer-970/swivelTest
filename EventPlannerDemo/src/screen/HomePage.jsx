import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image,FlatList, TouchableOpacity} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';





const imagess =[
 require('../assets/Images/pic12.jpeg'),
 require('../assets/Images/pic13.jpeg'),
 require('../assets/Images/pic11.jpeg'),
 require('../assets/Images/profilepic.webp'),
 require('../assets/Images/profile2.jpeg'),
 require('../assets/Images/profile3.jpeg'),
 require('../assets/Images/pic12.jpeg'),
 require('../assets/Images/pic13.jpeg'),
 require('../assets/Images/pic11.jpeg'),
 require('../assets/Images/profilepic.webp'),
]
// organizer pics
const orgImages =[
  require('../assets/Images/profilepic.webp'),
  require('../assets/Images/profile2.jpeg'),
  require('../assets/Images/profile3.jpeg'),
  
 ]


const HomePage = () => {
const navigation = useNavigation();
  const [getImage,setGetImage] = useState([]);
  const [getInfo,setGetInfo] = useState([]);
  const [getComment,setGetComment] = useState([]);
  const [showImage,setShowImage] = useState(false);
  const [sliderImages,setSliderImages] = useState([]);
  const [images, setImages] = useState([]);
  
  
 
  useEffect(()=>{
    getEventImage();
    getOrganizer();
    getComments();
  },[]);
  const getEventImage = () =>{
    const URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";
    fetch(URL).then((res) => {
     return res.json();
      }).then( data=>{
        setGetImage(data);
     })
  }
  const getOrganizer = async () =>{
    const URL = "https://jsonplaceholder.typicode.com/users?_limit=3";
    let result = await fetch(URL);
    result = await result.json();
    setGetInfo(result);
  }
  const getComments = async () =>{
    const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    let result = await fetch(URL);
    result = await result.json();
    setGetComment(result);
  }

  const showAllImage = () => {
    setShowImage(!showImage);
  }
const moveToPosts = ()=>{
  navigation.navigate('Posts', { flatListData: getComment,imagess });
  }
 

return (
    <View style={styles.MainConrainer}>
      <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.imageView}>
            <SliderBox images={getImage}/>
          </View>
          <View style={styles.organizerView}>
            <Text style={styles.header}>
              Welcome Party
            </Text>
            <Text style={{marginTop:10,color:'gray'}}>
              56 O'Mally Road, ST LEONARDS, 2065, NSW
            </Text>
            <Text style={styles.header1}>
              Organizers
            </Text>
            <View style={styles.organizerList}>
            {getInfo.length?
            <FlatList
              data={getInfo}
              keyExtractor={item => item.id}
              renderItem={({item,index}) => (
               <View style={[ styles.item]}>
                 <Image
                  source={orgImages[index]}
                  style={styles.image}
                  />
                <View style={styles.textView}>
                   <View  style={{marginLeft:15}}>
                    <Text
                      style={[
                      styles.text]}>
                      {item.name}
                      </Text>
                      <Text
                      style={[
                      styles.text2,]}>
                      {item.email}
                    </Text>
                   </View>
                   <View>
                    <Image
                     source={ require('../assets/icon/messageicon.png')}
                     style={styles.image1}/>
                  </View>
               </View>
               </View>
              )}
            />  :null}
            </View>
            <View style={styles.photosView}>
              <View style={styles.header2}>
                <Text style={styles.header2txt}>
                  Photos
                </Text>
                <TouchableOpacity onPress={showAllImage} style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.phototxt}>
                  All Photos
                </Text>
                 <Image
                 source={require('../assets/icon/arrow.png')}
                 style={{
                  height:15,
                  width:20,
                  tintColor:'#DA5E42'
                 }}/>
                </TouchableOpacity>
                </View>
                {/* show all image */}
                {showImage && (
                <View style={{height:200}}>
                  <SliderBox images={getImage}/>
                </View>)}
               <View style={styles.postView}>
                {getComment.length?
               <FlatList horizontal
                  data={getComment}
                  keyExtractor={item => item.id}
                  renderItem={({item,index}) => (
                    <View
                      style={[
                      styles.item1]}>
                      <Image
                        source={imagess[index]}
                        style={{height:125,width:'100%'}}
                      />
                    <Text
                      style={[
                      styles.text3]}>
                      {item.body}
                     </Text>
                    
                  </View>
                )}/>  :null}
             </View>
            </View>
          </View>
          <TouchableOpacity style={styles.postC} onPress={moveToPosts}>
              <Text style={styles.postN}>10</Text>
            <Text style={styles.posttxt}>Posts</Text>
          </TouchableOpacity>
      </ScrollView>
     </View>
    );
  
}

const styles = StyleSheet.create ({
  MainConrainer:{
    flex:1,
  },
  organizerView:{
    marginHorizontal:20,
    marginTop:10
    
  },
  header:{
    fontSize:22,
    fontWeight:'600'
  },
  header1:{
    fontSize:22,
    fontWeight:'600',
    marginTop:20
  },
  organizerList:{
    height:190,
   },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  item1: {
    width:300,
    marginVertical:10,
  
  },
  image:{
    height:30,
    width:30,
    borderRadius:65
    },
    textView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'90%'
    },
  image1:{
    height:30,
    width:30,
   },
  text3:{
    fontSize:16,
    marginTop:10,
    padding:5
  },
  text:{
    fontSize:16,
    marginTop:10,
   
  },
  text2:{
    fontSize:14,
    color:'gray'
  },
  photosView:{
    marginTop:15
   
  },
  
   post1: {  
    height:300,
    width:250,
    borderWidth:1,
    borderColor:'gray'},
  header2:{ 
   flexDirection:'row',
   justifyContent:'space-between'
  },
  header2txt:{
    fontSize:18,
    fontWeight:'500'
  },
  phototxt:{
    color:"#DA5E42",
    fontSize:14
  },
  postView:{
   marginTop:10,
   width:"100%",
   height:300,
   
  },
  header3:{
    marginTop:10,
    fontSize:18,
    fontWeight:"500",
    marginLeft:5
  },
  postC:{
    width:'100%',
    height:80,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    padding:10,
   
  },
  postN:{
    color:'#DA5E42',
    fontSize:25,
    fontWeight:'500',

  },
  posttxt:{
    color:'gray',
    fontSize:16
  }


})
export default HomePage;
