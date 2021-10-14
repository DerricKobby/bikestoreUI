import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Login() {
    return (
    
    <View style={{flex:1, alignItems:'center'}}>
        
        <Image
            style={{
                    width: 150,
                    height: 150,
                    borderRadius:15,
                    marginTop:200,
                    marginBottom:20,
            }}
            source={require("D:/ReactNative_Projects/BikerStore/images/bikes-01.png")}
        />
               <Text style={{color: "rgba(0,0,0,0.4)", fontSize:24}}>Welcome to</Text>
               <Text style={{color: "black", fontSize:30, fontWeight:"600"}}>POWER BIKE SHOP</Text>
    </View>
    );
}