import {useEffect, useState} from 'react'
import './header.css'
import img from '../img/main2.jpg'
import img1 from '../img/logo.svg'
import pbn2 from '../img/pbn2.jpg'




function Header (props) {
const [lol,Setlol]=useState('')

    let inputValue = ` Cześć jestem Klaudia ! Mam jedno życzenie: zatrzymać dla Ciebie najpiękniejsze chwile
    życia w formie obrazów. Fotografia to dla mnie nie tylko praca, to
    także sposób na zatrzymanie czasu i przekształcenie go w piękne
    wspomnienia. Kadry są dla mnie jak magiczne skarby, którymi chcę
    się dzielić z Tobą. Daj znać czego potrzebujesz :-)
   `
    let index = 1
    let speed = 60
    
    const writingAnimation = () => {
        let lolo=inputValue.slice(0,index)
        index++
        Setlol(lolo)
        if (index > inputValue.length) return
        
        setTimeout(writingAnimation,speed) 
   
    
        
    }

    const oj = () =>{
        setTimeout(writingAnimation,3500)
    }

const [trans,Settrans] =useState('TranslateX(1200px)')
const [transa,Settransa] =useState('TranslateX(-1200px)')
const show = () =>
setTimeout(() => {
    Settrans('TranslateX(0px)')
}, 1000);

const shows = async() =>
setTimeout(() => {
    Settransa('TranslateX(0px)')
    
}, 1000);

useEffect(() => {
    show()
},[])

useEffect(() => {
    shows()
},[])

useEffect(() => {
    oj()
},[])

    return( <>
 <div className='head' id='head'>
 <div className='size about'  >
<div className='lol1' style={{transform:`${transa}`}}>
    <img src={img1} className='logos' alt='logo'></img></div>
    
    
    <div className='lol' style={{transform:`${trans}`}}>
    <img src={pbn2} className='vintage' alt='logo' ></img>
{lol}
</div>

</div>
{/* 
<div className='size1 big' style={{transform:`${trans}`}}> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="17.7945 -10.8802 493.6 490.7" className='svg'>
<image  height="100%" width="100%" href={require("../img/main2.jpg")}/>
	<path className='sf' d="M 56 476 C 44 432.3333 32 388.6667 20 345 S 76 120.3333 104 8 C 218.6667 2 333.3333 -4 448 -10 S 481.3333 316 498 479" stroke="black" stroke-width="0.8" fill="red"></path>
</svg>

    </div> */}
   
 </div>
    
    
    </>)
}

export default Header