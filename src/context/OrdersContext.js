import React,{createContext,useContext,useEffect,useReducer,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const OrdersContext=createContext(null);
function reducer(s,a){switch(a.type){case 'LOAD':return a.orders;case 'CREATE':return [a.order,...s];case 'STATUS':return s.map(o=>o.id===a.id?{...o,status:a.status}:o);default:return s}}
export function OrdersProvider({children}){const [orders,dispatch]=useReducer(reducer,[]);const [loaded,setLoaded]=useState(false);
 useEffect(()=>{(async()=>{try{const x=await AsyncStorage.getItem('orders');dispatch({type:'LOAD',orders:x?JSON.parse(x):[]})}finally{setLoaded(true)}})()},[]);
 useEffect(()=>{if(loaded)AsyncStorage.setItem('orders',JSON.stringify(orders))},[orders,loaded]);
 return <OrdersContext.Provider value={{orders,dispatch}}>{children}</OrdersContext.Provider>}
export function useOrders(){const c=useContext(OrdersContext);if(!c)throw new Error('useOrders must be used inside OrdersProvider');return c;}
