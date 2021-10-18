import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const category =[
    {id: "1", name: "All"},
    {id: "2", name: "Roadbike"},
    {id: "3", name: "Mountain"},
    {id: "4", name: "Urban"}
];
 
function Item({name}){
    
    return(
        <TouchableOpacity
        style={{
            
            flexGrow:1,
            backgroundColor:"#f6f6f6",
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            paddingVertical: 5,
            paddingHorizontal:20,
            marginTop: 5,
            marginLeft:25,
            marginRight:-10}}>

            <Text style={{color:"#9c9c9c"}}>{name}</Text>
        </TouchableOpacity>
        
    )
}

const bikes =[
    {id: "1", name: "Pinarello Bike", price: "1,700.00", uri:"../images/b1.png"},
    {id: "2", name: "Brompton Bike", price: "1,500.00", uri:"../images/b2.png"},
    {id: "3", name: "Schwinn Bike",  price: "1,200.00", uri:"../images/b3.png"},
    {id: "4", name: "Norco Bike", price: "980.00", uri:"../imagesb4.png"},
  

];

function Bike({item, name, price, uri}) {
    return(
        <View style={{
            backgroundColor:"#f6f6f6",
            borderRadius:10,  
            height:200,
            width:150, 
            marginLeft:25,
            marginBottom:25,
            justifyContent:"flex-end",
            alignItems:'center',
            paddingBottom:20
            
           }}>
               
               <Text style={{color:"#9c9c9c", fontSize:12}}>{name}</Text>
               <Text style={{color:"#fa6401", fontSize:12,}}>$ <Text style={{fontSize:16, color:'black',fontWeight:"900"}}>{price}</Text></Text>
               
           </View>
    )}
export default function Login() {

    return  <View 
                style={{
                    backgroundColor:"white",
                    flex:1,
                    flexGrow:1
                    }}>
                    
                <View style={{flexDirection:'row', paddingHorizontal:25, paddingTop:60, justifyContent:"space-between", alignItems:"center"}}> 
                    <Ionicons name='ios-menu-outline' size={24} color="black"/>
                    
                    <FontAwesome name="bicycle" size={24} color="black" style={{paddingLeft:40}} />
                    
                    <View  style={{flexDirection:"row"}}>
                    <Feather name="search" size={22} color="black" />
                    <Feather name="bell" size={22} color="black" style={{paddingLeft:15}} />
                    </View>                    
                </View>

                <Text style={{color:"#9c9c9c" , paddingHorizontal:25, fontSize:18, marginTop:30}}>The World's <Text style={{color:'#fa6401', fontWeight:"800"}}>Best Bikes </Text>
                </Text>       

            <Text style={{
                paddingHorizontal:25,
                paddingTop:20,
                paddingBottom:10,
                fontSize:16,
                fontWeight:"800"
            }}>Categories</Text>   
            
            <View>
            <FlatList
                    data={category}
                    renderItem={({item}) => (
                    <Item name={item.name} />
                    )}
                    horizontal
                />
            </View>
            <View style={{marginTop:20}}>
            <FlatList
                
                    numColumns={2}
                    data={bikes}
                    
                    renderItem={({item}) => (
                    <Bike name={item.name} price={item.price} uri={item.uri}/>
                    
                    )}
                    
                />
            </View>

            <View style={{ flex:2, justifyItem:"center", height:50, width:"100%", backgroundColor:"#f6f6f6"}}>

            </View>
            

        </View>
            
    
}
