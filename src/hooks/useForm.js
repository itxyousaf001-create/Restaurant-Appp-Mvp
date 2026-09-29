import {useCallback,useState} from 'react';
export default function useForm(initialValues,validate){
 const [values,setValues]=useState(initialValues),[errors,setErrors]=useState({});
 const handleChange=useCallback((name,value)=>{setValues(v=>({...v,[name]:value}));setErrors(e=>({...e,[name]:undefined}))},[]);
 const handleSubmit=useCallback((onValid)=>{const e=validate(values);setErrors(e);if(!Object.keys(e).length)onValid(values)},[values,validate]);
 const reset=useCallback(()=>{setValues(initialValues);setErrors({})},[initialValues]);
 return {values,errors,handleChange,handleSubmit,reset,isValid:Object.keys(errors).length===0};
}
