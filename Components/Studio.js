import {useEffect, useState} from 'react'
import './studio.css'
import {Link} from "react-router-dom"
import S1 from '../img/studio/S1.jpg'
import S2 from '../img/studio/S2.jpg'
import S3 from '../img/studio/S3.jpg'
import S4 from '../img/studio/S4.jpg'
import S5 from '../img/studio/S5.jpg'
import S6 from '../img/studio/S6.jpg'
import S7 from '../img/studio/S7.jpg'
import S8 from '../img/studio/S9.jpg'
import S9 from '../img/studio/S9.jpg'
import S10 from '../img/studio/S10.jpg'
import S11 from '../img/studio/S11.jpg'
import S12 from '../img/studio/S12.jpg'
import S13 from '../img/studio/S13.jpg'
import S14 from '../img/studio/S14.jpg'
import S15 from '../img/studio/S15.jpg'
import S16 from '../img/studio/S16.jpg'
import S17 from '../img/studio/S17.jpg'
import S18 from '../img/studio/S18.png'
import S19 from '../img/studio/S19.png'
import S20 from '../img/studio/S20.png'
import S21 from '../img/studio/S21.png'




function Studio (props) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        scrollToTop()},[])

    return( <>
    <div className='studio'>
        <p className='studiotp'> 
W studiu fotograficznym w stylu boho, każde zdjęcie staje się wyjątkowym dziełem sztuki, 
przenoszącym widza w świat naturalnego piękna, harmonii i swobody wyrażania siebie. Usługa 
fotografii rodzinnej i indywidualnej w stylu boho to nie tylko sesje zdjęciowe, ale także magiczne 
doświadczenie, które podkreśla indywidualność, bliskość i piękno relacji.</p>
<div className='textst'>

<img src ={S1}className='studioimgv' alt='sesja świąteczna'></img>
<img src={S2} className='studioimgv' alt='sesja boho'></img>
<img src={S3} className='studioimgv' alt='sesja zdjęciowa chłopca'></img> 
<img src ={S4}className='studioimgv' alt='sesja w studiu boho'></img>

<img src={S9}  alt='sesja bożo narodzeniowa'  className='studioimgv'></img>
<img src={S10} alt='sesja podczas robienia pierników' className='studioimgv'></img>
<img src={S11}  alt='sesja podczas gotowania'  className='studioimgv'></img>
<img src={S12} className='studioimgv' alt='sesja boho modelki'></img>
<img src={S13} className='studioimgv' alt='młoda uśmiechnieta kobieta'></img> 
<img src ={S14}className='studioimgv' alt='sesja w studiu boho'></img>

<img src={S16} className='studioimgh' alt='sesja modelignowa'></img>
<img src={S17} alt='sesja młodej kobiety w studiu' className='studioimgv'></img>
<img src={S18}  alt='elegancka kobieta sesja portretowa'  className='studioimgv'></img>
<img src={S19}  alt='sesja w studio'  className='studioimgv'></img>
<img src={S20} alt='sesja na plakat wyborczy' className='studioimgv'></img>
<img src={S21}  alt='elegancka kobieta sesja portretowa'  className='studioimgv'></img>
<div className='insideC'><img src={S7} alt='sesja portretowa' className='studioimgv'></img>
<img src={S15} className='studioimgv' alt='sesja portretowa damy'></img></div>

        </div>

    </div>
    
    
    </>)
}

export default Studio