import {useEffect, useState} from 'react'
import {Link as Lin} from 'react-router-dom'
import {Link} from 'react-scroll'
import { useNavigate, } from 'react-router-dom'
import './navbar.css'




function Navbar (props) {
    const history = useNavigate()
    const [type,Settype] = useState('')
    const [display, Setdisplay] = useState('')
    const [displayBig, SetdisplayBig] = useState('')

    const closeButton = () =>{
if(window.innerWidth <= 992){
    Setdisplay('flex')
    SetdisplayBig('none')
}else {
    Setdisplay('none')
    SetdisplayBig('flex')
}


}

const closesmall = () => {
    Settype('none')
}
const closesmall1 = () => {
    history('/client')
}


useEffect(() => {closeButton()}, [])
    window.addEventListener('resize',closeButton)
const changeButton = () =>{
   if(type === '')
    Settype('transform')
else{
    Settype('')
}
}

    return( <>
    <div className={`nav`}>
   
<div className={`burger-button`} onClick={changeButton} style={{display:`${display}`}}>
    <div className={'burger-bars'}></div>
    <div className={'burger-bars'}></div>
    <div className={'burger-bars'}></div>
</div>


        
<div className={`navitem ${type}`}>
<Link className={'navitems'}  to="head" spy={true} smooth={true} offset={-50} duration={500} onClick={closesmall}>HOME</Link>
<Link className={'navitems'}  to="oferta" spy={true} smooth={true} offset={-80} duration={500} onClick={closesmall}>OFERTA</Link>
<Link className={'navitems'}  to="cennik" spy={true} smooth={true} offset={-50} duration={500} onClick={closesmall}>CENNIK</Link>
<Link className={'navitems'}  to={'/client'} spy={true} smooth={true} offset={-50} duration={500} onClick={closesmall1}>STREFA KLIENTA</Link>
<Link className={'navitems'}  to="kontakt" spy={true} smooth={true} offset={-50} duration={500} onClick={closesmall} >KONTAKT</Link>
</div>

<div className={`bigNav`} style={{display:`${displayBig}`}}>
<Link className={'bigNavitems'}  to="head" spy={true} smooth={true} offset={-50} duration={500}>HOME</Link>
<Link className={'bigNavitems'}  to="oferta" spy={true} smooth={true} offset={-80} duration={500}>OFERTA</Link>
<Link className={'bigNavitems'}  to="cennik" spy={true} smooth={true} offset={-50} duration={500}>CENNIK</Link>
<Lin className={'bigNavitems'}  to={'/client'} spy={true} smooth={true} offset={-50} duration={500}>STREFA KLIENTA</Lin>
<Link className={'bigNavitems'}  to="kontakt" spy={true} smooth={true} offset={-50} duration={500}>KONTAKT</Link>
</div>


    </div>
    
    
    </>)
}

export default Navbar