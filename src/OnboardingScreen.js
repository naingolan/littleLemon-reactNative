import React from 'react';
import { View, Text,TextInput, Pressable,Button ,Image,  Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from './Utils/Images';

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{width: screenWidth, flexDirection:'row',alignItems:'center', height:100, justifyContent:'space-around', padding:0}}>
            <Image source={Images.logoWide} style={{width:150, heihgt:100, resizeMode:'contain'}} />
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
        <View>
           <View style={{flexDirection:'column', }}>
           <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>Name *</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.9,borderColor:"#ccc",}}
            placeholder = "tilly"
           ></TextInput>
           </View>
           <View style={{flexDirection:'column', }}>
           <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>Email *</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.9,borderColor:"#ccc",}}
            placeholder = "tillydoe@example.com"
           ></TextInput>
           </View>

           <Pressable onPress={()=>{navigation.navigate('Home')}}>
                <View style={{elevation:5,marginVertical:20,backgroundColor:'red', width:screenWidth*.9, height:50, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                     <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Get Started</Text>
                </View>
           </Pressable>
        </View>
        </View>
    );
}

export default OnboardingScreen;