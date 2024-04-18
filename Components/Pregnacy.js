import {useEffect} from 'react'
import './pregnacy.css'
import {Link} from "react-router-dom"
import C1 from '../img/preg/C1.png'
import C2 from '../img/preg/C2min.jpeg'
import C3 from '../img/preg/C3min.jpeg'
import C4 from '../img/preg/C4min.jpeg'
import C5 from '../img/preg/C5min.jpeg'
import C6 from '../img/preg/C6min.PNG'
import C7 from '../img/preg/C7min.png'



function Pregnacy (props) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

      useEffect(() => {
        scrollToTop()},[])
    return( <>
    <div className='pregnacy'>
        <p className='pregnacytp'>Fotografia jest wyjątkowym medium, zdolnym uchwycić niezapomniane chwile i uczucia. 
    Fotografia ciążowa to niepowtarzalna forma sztuki, która pozwala przyszłym rodzicom uwiecznić piękno 
    i radość oczekiwania na dziecko.Te niepowtarzalne obrazy stanowią trwałą pamiątkę dla rodziców i dziecka. 
    Fotografia ciążowa potrafi podkreślić naturalne piękno przyszłej mamy, korzystając z profesjonalnych technik oświetleniowych i kompozycyjnych. 
    Wyraz emocji, fotografie ciążowe przenoszą  widza w emocjonalną podróż, uchwycając radość, oczekiwanie i miłość, które towarzyszą rodzicom w tym wyjątkowym okresie.
W fotografii ciążowej chodzi o uchwycenie magii chwil oczekiwania na nowe życie, tworząc nie tylko piękne obrazy, ale także trwałe wspomnienia dla całej rodziny.</p>
        <div className='textph'>
            {/* <div className='photoc'></div> */}
        <img src={C1} className='pregnacyimg' alt='sesja ciążowa'></img>
        <img src={C2} alt='sesja ciążowa' className='pregnacyimg'></img>
        <img src={C3} className='pregnacyimg' alt='sesja ciążowa'></img>
        <img src={C7} className='pregnacyimg' alt='sesja ciążowa'></img>
        
        <img src={C6} alt='sesja ciążowa' className='pregnacyimg'></img>
        <div className='insideC'><img src={C4} alt='sesja ciążowa' className='pregnacyimg'></img>
        <img src={C5} className='pregnacyimg' alt='sesja ciążowa'></img></div>
        
       
       

        </div>
        {/* <div className='textph'>
        <img src={o} alt='zdjęcia z sesji ciążowej' className='pregnacyimgx'></img>
<img src={ui} alt='zdjęcia z sesji ciążowej' className='pregnacyimgxx'></img>

        </div> */}

    </div>
    
    
    </>)
}

export default Pregnacy