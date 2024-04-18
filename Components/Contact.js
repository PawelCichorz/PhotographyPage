import {useEffect, useState} from 'react'
import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';





function Contact (props) {
    // const [email,Setemail] = useState('')
    // const [pass,Setpass] = useState('')
    const [usermessage,Setusermessage] =useState('')
    const[footerYear,SetfooterYear] =useState('')

const laters = () => {
    setTimeout(() => {
        Setusermessage('')
    }, 3000);
}

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r5evu8d', 'template_0jdry9d', form.current, 'vcw8JPC7dXWzyrNn9')
        .then((result) => {
            Setusermessage('Email wysłany poprawnie')
            laters()
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };


    const handleYear = () => {
        const year = (new Date).getFullYear()
        SetfooterYear(year)
       
    }

    useState(() => {
        handleYear()
    },[])
    

    return( 
    

    <>
       <form className='form' id='kontakt'  ref={form} onSubmit={sendEmail} >
        <div className='contact'>

   <h3 className='titl'>Formularz Kontaktowy</h3>
   <div className='media'>
   <label className='name pad' >
      <input placeholder='Imię'  type="text" name="user_name" className='inputc'></input>
      
   </label>
   
   <label className='email pad' >
   <input  placeholder='Adres email' type="email" name="user_email" className='inputc'></input>
   
   </label>
   </div>
  
   <div className='textt pad' >
   
  <textarea placeholder='Treść Wiadomości...' name="message" cols="22" rows="7" className='inputc' ></textarea>
   
   </div>
   <button className='sent'  type="submit" value="Send">Wyślij</button>
   <p className='usermessage'>{usermessage}</p>
   </div>

   <div class="footerbox ">


<div class="socialmedia">
    <p className='tel'><i class="fa-solid fa-phone" style={{color:'#74C0FC'}}></i> 509 911 325</p>
    <p className='em'> <i class="fa-solid fa-envelope" style={{color:'#74C0FC'}}></i> cichorz.klaudia@gmail.com</p>
    <a href='https://www.facebook.com/profile.php?id=100095648645788' className='em'><i class="fa-brands fa-facebook" style={{color:'#74C0FC'}}></i></a>

</div>
    
<div class="footerdown">
<p className='spe'> PC <i class="fa-regular fa-copyright "></i> <span  className='spe'>{footerYear}</span> Copyright</p>
</div>

    </div>
      </form>

     
    </>
                
            
    
    
    )
}

export default Contact