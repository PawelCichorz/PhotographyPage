import {useEffect} from 'react'
import './outdoors.css'

import P1 from '../img/plener/P1.jpg'
import P2 from '../img/plener/P2.jpg'
import P3 from '../img/plener/P3.jpg'
import P4 from '../img/plener/P4.jpg'
import P5 from '../img/plener/P5.jpg'
import P6 from '../img/plener/P6.jpg'
import P7 from '../img/plener/P7.jpg'
import P8 from '../img/plener/P8.jpg'
import P9 from '../img/plener/P9.jpg'
import P10 from '../img/plener/P10.jpg'
import P11 from '../img/plener/P11.jpg'
import P12 from '../img/plener/P12.jpg'
import P13 from '../img/plener/P13.jpg'
import P14 from '../img/plener/P14.jpg'


function Outdoors (props) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        scrollToTop()},[])
    return( <>
    <div className='outdoors'>
        <p className='outp'>
        Sesje plenerowe w pięknych krajobrazach i ciekawych miejscach to niepowtarzalne doświadczenie, 
        które przekłada się na wyjątkowe rezultaty fotograficzne. Tego rodzaju sesje oferują szereg zalet, 
        zarówno estetycznych, jak i emocjonalnych, które sprawiają, że każda chwila staje się niezapomniana.
        Po pierwsze, naturalne piękno otaczającego krajobrazu staje się doskonałym tłem dla sesji plenerowej. 
        Zastosowanie różnorodnych scenerii, od malowniczych plaż po zielone lasy czy miejskie zakątki, pozwala 
        na uzyskanie różnorodnych i fascynujących ujęć, dodając unikalny charakter każdej fotografii.</p>
        <div className='textout'>
       
<img src={P1} alt='chłopiec zbiera kamienie na plaży' className='outimg'></img>


<img src={P6} className='outimg'     alt='zdjęcie oceanu' ></img>
<img src={P7} className='outimg' alt='chłopiec na plaży'></img>
<img src={P8} className='outimg' alt='zdjęcie nad oceanem'></img>
<img src={P9} className='outimg'     alt='spacer ojca i syna na plaży' ></img>
<img src={P10} className='outimg' alt='chłopiec ogląda mural'></img>
<img src={P11} alt='zdjęcia pamiątek z wakacji' className='outimg'></img>
<img src={P12} className='outimg' alt='sesja plenerowa fotografa'></img>
<img src={P13} className='outimg' alt='fotografia chłopca w plenerze'></img>

<div className='insideC'><img src={P2} className='outimg' alt='sesja plenerowa fotografa'></img>
<img src={P3} className='outimg' alt='spacer ojca i syna na plaży'></img></div>
<div className='insideC'><img src={P4} alt='zdjęcie chłopca na tle zieleni' className='outimg'></img>
<img src={P5} className='outimg'    alt='zdjęcie kwiatów' ></img></div>
<img src={P14} alt='chłopiec robi fikołka na plaży' className='outimg'></img>


        </div>

    </div>
    
    
    </>)
}

export default Outdoors