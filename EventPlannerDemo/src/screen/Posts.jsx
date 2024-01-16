import React, { Component } from 'react';
import { View, Text, FlatList ,StyleSheet,Image} from 'react-native';
import { useRoute } from '@react-navigation/native';


const Posts = () =>{
  const route = useRoute();
  const flatListData = route.params?.flatListData || [];
  const imagess= route.params?.imagess || [];
    return (
        <View style={{flex:1,backgroundColor:"#FFF"}}>
            <View style={styles.cardView}>
                <View style={styles.hView}>
                <Text style={styles.header}>Post</Text>
                </View>
                
            <FlatList
          data={flatListData}
          keyExtractor={(item) => item.id}
          renderItem={({ item,index }) => (
            <View
            style={[
            styles.item1]}>
             <Image
               source={imagess[index]}
               style={styles.image}
             />
              <Text
                style={[
                styles.text]}>
                {item.body}
               </Text>
              
            </View>
   
          )}
        />
            </View>

      
      </View>
    );

}
const styles = StyleSheet.create ({ 
    item1: {
    margin:10,
    alignItems: 'center',
    marginVertical:10,
    borderRadius:5,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  hView:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'

  },
  header:{
  fontSize:22,
  fontWeight:'700',
  color:"#DA5E42",
  marginTop:20,
  
  },
 cardView:{
   width:"95%",
   padding:20

 },
  image:{
    height:125,
    width:300,
    borderRadius:10
    
  },
  text:{
    fontSize:16
  },
 
})

export default Posts;
