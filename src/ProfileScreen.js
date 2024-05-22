import React, {useState} from 'react';
import { View, Text,ScrollView, TextInput,Button,Pressable, Image,Dimensions, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from './Utils/Images';
import CheckBox from 'expo-checkbox';
const ProfileScreen = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [isChecked, setIsChecked] = useState(false);

    
    return (
        <View style={{ width:screenWidth, height:screenHeight,flex: 1, }}>
        <View style={{width: screenWidth, flexDirection:'row',alignItems:'center', height:80, justifyContent:'space-around', padding:0}}>
            <Pressable onPress={()=>navigation.navigate('Home')}style={{height:40, width:40,backgroundColor:'red',borderRadius:50,}}>
                <Image source={Images.back} style={{height:40, width:40, borderRadius:40}}/>
            </Pressable>
            <Image source={Images.logoWide} style={{width:120, heihgt:100, resizeMode:'contain'}} />
            <Pressable onPress={()=>{navigation.navigate('Profile')}} style={{height:40, width:40, borderRadius:50, backgroundColor:"red"}}>
                <Image source={Images.profile} style={{height:40, width:40, borderRadius:40}}/>
            </Pressable>
        </View>
        <ScrollView style={{margin:10,marginTop:0, backgroundColor:"#ffffff",borderRadius:10,flexDirection:'column', paddingVertical:10, paddingHorizontal:20}}>
           <View style={{flexDirection:'column', }}>
           <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>First name</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.8,borderColor:"#ccc",}}
            placeholder = "tilly"
            value="Tilly"
           ></TextInput>
           </View>
           <View style={{flexDirection:'column', }}>
           <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>Last name</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.8,borderColor:"#ccc",}}
            placeholder = "tilly"
            value="Doe"
           ></TextInput>
           </View>
           <View style={{flexDirection:'column', }}>
           <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>Email</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.8,borderColor:"#ccc",}}
            placeholder = "tilly"
            value="tillydoe@example.com"
           ></TextInput>
            <Text style={{fontWeight:'bold',fontSize:16, marginVertical:10}}>Phone number</Text>
           <TextInput
            style={{paddingHorizontal:10,borderWidth:2, borderRadius:10,width:screenWidth*.8,borderColor:"#ccc",}}
            placeholder = "tilly"
            value="+255 768498799"
           ></TextInput>
           </View>

           <View style={{textAlign:'left', width: screenWidth, padding: 20, alignItems:'flex-tart', flexDirection:'row',justifyContent:'flex-start'}}>
           <Text style={{fontWeight:'bold', fontSize:20, color:'#000', textAlign:'left', }}>Email notifications</Text>
           </View>

           <View>
           <View style={{flexDirection:'row',paddingHorizontal:20, paddingVertical:10,justifyContent:'flex-start',width:screenWidth,}}>
           <Pressable onPress={()=>setIsChecked(!isChecked)}>
            {
                isChecked?<View style={{marginRight:10,height:25, borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                </View> 
                :
                <View style={{marginRight:10, alignItems:'center',height:25, backgroundColor:'red', borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                <Image source={Images.check} style={{height:18, width:15}}/>
                </View>
            }
           </Pressable>
           <Text>Order statuses</Text>
           </View>
           <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10,justifyContent:'flex-start',width:screenWidth,}}>
           <Pressable onPress={()=>setIsChecked(!isChecked)}>
            {
                isChecked?<View style={{marginRight:10,height:25, borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                </View> 
                :
                <View style={{marginRight:10, alignItems:'center',height:25, backgroundColor:'red', borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                <Image source={Images.check} style={{height:18, width:15}}/>
                </View>
            }
           </Pressable>
           <Text>Order statuses</Text>
           </View>
           <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10,justifyContent:'flex-start',width:screenWidth,}}>
           <Pressable onPress={()=>setIsChecked(!isChecked)}>
            {
                isChecked?<View style={{marginRight:10,height:25, borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                </View> 
                :
                <View style={{marginRight:10, alignItems:'center',height:25, backgroundColor:'red', borderColor:'red',borderRadius:5,width:25, borderWidth:2,}}>
                <Image source={Images.check} style={{height:18, width:15}}/>
                </View>
            }
           </Pressable>
           <Text>Order statuses</Text>
           </View>
           <Pressable style={{marginHorizontal:'auto'}} onPress={()=>{navigation.navigate('Home')}}>
                <Pressable onPress={()=>navigation.navigate("Onboarding")}style={{elevation:5,marginVertical:20,backgroundColor:'red', width:screenWidth*.8, height:50, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                     <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Log Out</Text>
                </Pressable>
           </Pressable>

           <View style={{flexDirection:'row', }}>
           <Pressable style={{marginHorizontal:'auto'}} onPress={()=>{navigation.navigate('Home')}}>
                <View style={{paddingHorizontal:20, marginVertical:20, height:50, borderWidth:2, borderColor:"red", borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                     <Text style={{color:'#ccc', fontWeight:'bold', fontSize:16}}>Discard changes</Text>
                </View>
           </Pressable>
           <Pressable style={{marginHorizontal:'auto'}} onPress={()=>{navigation.navigate('Home')}}>
                <View style={{paddingHorizontal:20, elevation:5,marginVertical:20,backgroundColor:'red',  height:50, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                     <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Save changes</Text>
                </View>
           </Pressable>
              

           </View>
           </View>



 


        </ScrollView>
        </View>
    );
}

export default ProfileScreen;