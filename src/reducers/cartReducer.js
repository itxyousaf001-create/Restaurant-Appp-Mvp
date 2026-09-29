export const initialCart={items:[],promoCode:null,discountPercent:0,error:null};
export function cartReducer(state,action){
 const copy=[...state.items];
 switch(action.type){
  case 'ADD_ITEM': {const i=copy.findIndex(x=>x.id===action.item.id); if(i>=0) copy[i]={...copy[i],quantity:copy[i].quantity+1}; else copy.push({...action.item,quantity:1,note:''}); return {...state,items:copy,error:null};}
  case 'REMOVE_ITEM': return {...state,items:copy.filter(x=>x.id!==action.id)};
  case 'INCREMENT': return {...state,items:copy.map(x=>x.id===action.id?{...x,quantity:x.quantity+1}:x)};
  case 'DECREMENT': return {...state,items:copy.map(x=>x.id===action.id?{...x,quantity:x.quantity-1}:x).filter(x=>x.quantity>0)};
  case 'UPDATE_NOTE': return {...state,items:copy.map(x=>x.id===action.id?{...x,note:action.note}:x)};
  case 'CLEAR_CART': return initialCart;
  case 'APPLY_PROMO': {const p={WELCOME10:10,FEAST20:20}; if(!p[action.code]) return {...state,error:'Invalid promo code'}; return {...state,promoCode:action.code,discountPercent:p[action.code],error:null};}
  case 'REMOVE_PROMO': return {...state,promoCode:null,discountPercent:0,error:null};
  default:return state;
 }
}
