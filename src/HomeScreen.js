import React from 'react';
import {FlatList, Pressable, ScrollView, StyleSheet, View, Text, Button,Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from './Utils/Images';

const HomeScreen = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    

    const foodList = [
        { id: '1', name: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.', price: '$1.00' },
        { id: '2', name: 'Banana', description: 'A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.', price: '$0.50' },
        { id: '3', name: 'Carrot', description: 'A tapering orange-colored root eaten as a vegetable.', price: '$0.30' },
        { id: '4', name: 'Bread', description: 'Food made of flour, water, and yeast mixed together and baked.', price: '$2.00' },
        { id: '5', name: 'Milk', description: 'A white liquid produced by the mammary glands of mammals.', price: '$1.50' },
        { id: '6', name: 'Cheese', description: 'A food made from the pressed curds of milk.', price: '$2.50' },
        { id: '7', name: 'Eggs', description: 'Eggs from domesticated birds, most commonly chickens, used for food.', price: '$3.00' },
        { id: '8', name: 'Chicken Breast', description: 'Boneless, skinless chicken breast that is often grilled or baked.', price: '$5.00' },
        { id: '9', name: 'Broccoli', description: 'An edible green plant in the cabbage family whose large flowering head is eaten as a vegetable.', price: '$1.75' },
        { id: '10', name: 'Rice', description: 'A cereal grain that is a staple food for a large part of the world\'s human population.', price: '$1.20' },
      ];

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer, {flexDirection:'row', justifyContent:'space-between'}]}>
          <View style={{width:'75%'}}> 
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
          </View>
            <Image source={Images.logo} style={{width:75, height:75, resizeMode:'contain'}} />
        </View>
      );


    return (
        <View style={{ width:screenWidth, height:screenHeight,flex: 1, }}>
        <View style={{width: screenWidth,paddingLeft:'20%', flexDirection:'row',alignItems:'center', height:100, justifyContent:'space-around', padding:0}}>
            <Image source={Images.logoWide} style={{width:150, heihgt:100, resizeMode:'contain'}} />
            <Pressable onPress={()=>{navigation.navigate('Profile')}} style={{height:40, width:40, borderRadius:50, backgroundColor:"red"}}>
                <Image source={Images.profile} style={{height:40, width:40, borderRadius:40}}/>
            </Pressable>       
        </View>
        <View style={{ padding:10,marginVertical:0,backgroundColor:'red', width:screenWidth,}}>
            <Text style={{color:'yellow', fontSize:24, fontWeight:'bold'}}>Little Lemon</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:'65%'}}>
                   <Text style={{color:'white', fontSize:16,fontWeight:'600'}}>Chicago</Text>
                   <Text  style={{color:'white'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served witha modern twist.</Text>
                </View>
                <Image source={Images.logo} style={{height:100, width:100, borderRadius:15}}/>

            </View>
            <View>
            </View>
        </View>
        <View style={{paddingHorizontal:10,width:screenWidth, justifyCotnent:"flex-start"}}>
            <Text style={{marginVertical:10, textAlign:'start',justifyContent:'flex-start', alignItems:'flex-start', fontWeight:'bold', color:"#000000"}}>
                ORDER FOR DELIVERY!
            </Text>
            <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-around',}}>
                <View style={{alignItems:'center',justifyContent:'center',height:30, width:screenWidth*.20, borderRadius:10,backgroundColor:'#eaedac'}}>
                    <Text style={{fontWeight:'700'}}>Starters</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',height:30, width:screenWidth*.20, borderRadius:10,backgroundColor:'#eaedac'}}>
                    <Text style={{fontWeight:'700'}}>Starters</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',height:30, width:screenWidth*.20, borderRadius:10,backgroundColor:'#eaedac'}}>
                    <Text style={{fontWeight:'700'}}>Starters</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',height:30, width:screenWidth*.20, borderRadius:10,backgroundColor:'#eaedac'}}>
                    <Text style={{fontWeight:'700'}}>Starters</Text>
                </View>
            </View>
            <View style={{borderWidth:.2,marginVertical:10}}></View>
            <View>
                <FlatList style={{backgroundColor:'transparent'}}
                  data={foodList}
                  renderItem={renderItem}
                  keyExtractor = {item=>item.id}
                  />
            </View>
        </View>
   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      
    },
    itemContainer: {
      padding: 8,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 12,
      color: '#555',
      marginVertical: 8,
    },
    price: {
      fontSize: 16,
      color: '#000',
    },
  });
  
  

export default HomeScreen;