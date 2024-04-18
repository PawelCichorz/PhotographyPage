import {useEffect, useState} from 'react'
import './reportage.css'
import {Link} from "react-router-dom"
import P1 from '../img/reportage/P1.jpg'
import P2 from '../img/reportage/P2.jpg'
import P3 from '../img/reportage/P3.jpg'
import P4 from '../img/reportage/P4.jpg'

import P12 from '../img/reportage/P12.jpg'
import P13 from '../img/reportage/P13.jpg'
import P14 from '../img/reportage/P14.jpg'
import P15 from '../img/reportage/P15.jpg'
import P16 from '../img/reportage/P16.jpg'
import P17 from '../img/reportage/P17.jpg'
import P18 from '../img/reportage/P18.jpg'
import P19 from '../img/reportage/P19.jpg'

import P20 from '../img/reportage/P20.jpg'

function Reportage (props) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        scrollToTop()},[])
    return( <>
    <div className='reportages'>
        <p className='reportagetp'>
Fotografia reportażowa stanowi niezastąpione narzędzie do profesjonalnego uchwycenia 
niezapomnianych chwil podczas różnorodnych wydarzeń życiowych. Chrzciny, urodziny, rocznice, 
studniówki - każde z tych wydarzeń to unikalna historia, która zasługuje na staranne i emocjonalne uwiecznienie.
Fotograf reportażowy, specjalizujący się w tego typu okazjach, nie tylko dokumentuje wydarzenia, ale 
także łapie istotę chwili. To sposób na uwiecznienie uśmiechów, wzruszeń, niepowtarzalnych emocji i 
spontanicznych gestów, które czynią każde z tych wydarzeń niepowtarzalnym.

</p>
        <div className='textreportage'>
       
        <img src={P1} alt='zdjęcie torta' className='outimg'></img>
<img src={P2} className='outimg' alt='zdjęcie z urodzin chłopca'></img>
<img src={P4} alt='chłopcy z balonami' className='outimg'></img>

<img src={P12} className='outimg' alt='spiękna para tańczy'></img>
<img src={P13} className='outimg' alt='ojciec trzyma noworodka'></img>
<img src={P14} alt='wnuk z prababcią' className='outimg'></img>
<img src={P15} className='outimg'    alt='studniówka' ></img>

<img src={P17} className='outimg' alt='ubranka na chrzest'></img>
<img src={P18} className='outimg' alt='matka całuje dziecko'></img>
<img src={P19} className='outimgb'     alt='chrzest dziecka' ></img>
<img src={P20} className='outimg' alt='rodzice trzymają dziecko do chrztu'></img>'
<div className='insideC'><img src={P3} className='outimg' alt='sala przystrojona na urodziny'></img>
<img src={P16} className='outimg'     alt='zdjęcie chłopca na tle zieleni' ></img></div>'


        </div>

    </div>
    
    
    </>)
}

export default Reportage