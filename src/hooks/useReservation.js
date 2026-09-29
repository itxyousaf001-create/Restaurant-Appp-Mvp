import {useCallback,useMemo,useState} from 'react';
import {mockTables,mockReservations} from '../data/tables';
export default function useReservation(){
 const [date,setDate]=useState(new Date()),[time,setTime]=useState('12:00'),[partySize,setPartySize]=useState(2),[table,setTable]=useState(null),[phone,setPhone]=useState(''),[name,setName]=useState('');
 const availableTables=useMemo(()=>mockTables.filter(t=>t.seats>=partySize),[partySize]);
 const slots=Array.from({length:11},(_,i)=>`${String(i+12).padStart(2,'0')}:00`);
 const createReservation=useCallback(()=>{const now=new Date(); if(date<new Date(now.getFullYear(),now.getMonth(),now.getDate())) throw new Error('Date cannot be in the past'); if(partySize<1||partySize>12)throw new Error('Party size must be 1-12'); if(!/^03\\d{2}-\\d{7}$/.test(phone))throw new Error('Use 03XX-XXXXXXX'); if(!table)throw new Error('Select a table'); const r={id:'r'+Date.now(),date:date.toISOString(),time,partySize,tableId:table.id,name,phone,status:'Pending'};mockReservations.push(r);return r},[date,time,partySize,table,phone,name]);
 const cancelReservation=useCallback(id=>{const i=mockReservations.findIndex(r=>r.id===id);if(i>=0)mockReservations[i].status='Cancelled'},[]);
 return {date,setDate,time,setTime,partySize,setPartySize,table,setTable,phone,setPhone,name,setName,availableTables,slots,createReservation,cancelReservation};
}
