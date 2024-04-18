import {useEffect, useState} from 'react'
import './estate.css'
import {Link} from "react-router-dom"
import N1 from '../img/estate/N1.jpg'
import N2 from '../img/estate/N2.png'
import N3 from '../img/estate/N3.jpg'
import N4 from '../img/estate/N4.jpg'
import N5 from '../img/estate/N5.jpg'
import N6 from '../img/estate/N6.jpg'
import N7 from '../img/estate/N7.jpg'





function Estate (props) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        scrollToTop()},[])
    return( <>
    <div className='estate'>
        <p className='estatetp'>
Profesjonalna sesja zdjęciowa nieruchomości jest nieodzownym elementem udanej prezentacji na rynku. 
Doświadczony fotograf, zdając sobie sprawę z kluczowej roli wizualnej prezentacji, nie tylko uchwyci 
estetykę nieruchomości, ale także podkreśli unikalne cechy, które mogą przyciągnąć uwagę potencjalnych 
nabywców lub najemców. Dzięki starannie wykonanym zdjęciom, oferta staje się bardziej atrakcyjna już na 
pierwszy rzut oka, co wpływa pozytywnie na pierwsze wrażenie klientów.</p>
        <div className='textestate'>
       
        <img src={N1} alt='zdjęcie wnętrza nieruchomości' className='estateimg'></img>
<img src={N2} className='estateimg' alt='sesja zdjęciowa nieruchomości'></img>
<img src={N3} className='estateimg' alt='sesja zdjęciowa nieruchomości'></img>
<img src={N5} className='estateimg' alt='sesja zdjęciowa nieruchomości'></img>

<img src={N7} className='estateimg' alt='sesja zdjęciowa nieruchomości'></img>

<div className='insideC'><img src={N4} alt='zdjęcie wnętrza nieruchomości' className='estateimg'></img>
<img src={N6} className='estateimg' alt='sesja zdjęciowa nieruchomości'></img>
</div>
        </div>
        
    </div>
    
    
    </>)
}

export default Estate