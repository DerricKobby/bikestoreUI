import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Login() {
    return (
    
    <View style={{flex:1, alignItems:'center', backgroundColor:"white"}}>
        
        <Image
            style={{
                    width: 300,
                    height: 272.126,
                    borderRadius:15,
                    marginTop:150,
                    marginBottom:40,
                    marginRight:30,
            
            }}
            source={require("../images/bikes-01.png")}
        />
               <Text style={{color: "black", fontSize:24}}>Welcome to</Text>
               <Text style={{color: "black", fontSize:30, fontWeight:"800"}}>Power Bike Shop</Text>

               <TouchableOpacity
                    activeOpacity={0.4}
                    style={{
                        backgroundColor:"#f2f2f2",
                        padding:20,
                        borderRadius:15,
                        paddingHorizontal:90,
                        marginTop:20,
                        flexDirection:"row",
                        justifyContent:"center"
                        }}>
                         <Image
                            source={require('../images/google.png')}
                            style={{
                                width: 17,
                                height: 17,
                            }}
                        />

                    <Text style={{fontSize:16, fontWeight:"600", marginLeft:10}}>Login with Gmail</Text>
               </TouchableOpacity>

               <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        backgroundColor:"black",
                        padding:20,
                        borderRadius:15,
                        paddingHorizontal:90,
                        marginTop:15,
                        flexDirection:"row",
                        justifyContent:"center"
                        }}>

                    <AntDesign name="apple1" size={17} color="#ffffff" />

                    <Text  style={{color:'#ffffff', fontWeight:"500", fontSize:16, marginLeft:10}}>Login with Apple</Text>
               </TouchableOpacity>

               <Text  style={{color:'grey', fontWeight:"500", fontSize:14, marginTop:15}}>Not a Member? <Text style={{color:'#fa6401', fontWeight:"800"}}>Sign up</Text>
               </Text>
    </View>
    );
}