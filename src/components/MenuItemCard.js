import React from 'react';
import {Image,Pressable,StyleSheet,Text,View} from 'react-native';
import {useTheme} from '../context/ThemeContext';
function MenuItemCard({item,onAdd,isFavourite,onFavourite}){const {theme}=useTheme(); console.log('MenuItemCard render',item.id);
 return <View style={[s.card,{backgroundColor:theme.card,borderColor:theme.border,opacity:item.isAvailable?1:.5}]}>
  <Image source={{uri:item.image}} style={s.img}/>
  <View style={s.body}><View style={s.row}><Text style={[s.name,{color:theme.text}]}>{item.name}</Text><Pressable onPress={()=>onFavourite(item.id)}><Text style={{fontSize:22}}>{isFavourite?'♥':'♡'}</Text></Pressable></View>
  {item.isSpecial&&<Text style={s.badge}>DAILY SPECIAL</Text>}<Text style={{color:theme.muted}} numberOfLines={2}>{item.description}</Text>
  <View style={s.row}><Text style={[s.price,{color:theme.primary}]}>Rs. {item.price}</Text><Pressable disabled={!item.isAvailable} onPress={()=>onAdd(item)} style={[s.add,{backgroundColor:theme.primary}]}><Text style={{color:'#fff'}}>{item.isAvailable?'Add':'Unavailable'}</Text></Pressable></View></View>
 </View>}
const s=StyleSheet.create({card:{margin:8,borderWidth:1,borderRadius:14,overflow:'hidden'},img:{height:150,width:'100%'},body:{padding:12},row:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},name:{fontSize:18,fontWeight:'700',flex:1},badge:{fontSize:10,fontWeight:'800',marginVertical:5},price:{fontWeight:'800',fontSize:16},add:{paddingHorizontal:14,paddingVertical:8,borderRadius:18}});
export default React.memo(MenuItemCard);
