import {useEffect, useState} from 'react'
import './offer.css'
import {Link} from "react-router-dom"




function Offer (props) {


    return( <>
    <div className='offer' id='oferta'>
        <div className='title'>Oferta</div>
        <div className='offerbox'>
        <div className='offerbox1'>
   <Link className='box a' to={'/pregnacy'}><p className='square'>Fotografia Ciążowa</p></Link>
   <Link className='box c' to={'/studio'}><p className='square'> Sesja w Studio</p></Link>
   </div>
   <div className='offerbox2'>
   <Link className='box d' to={'/estate'}><p className='square'> Sesje Nieruchomości</p></Link>
   <Link className='box e' to={'/reportage'}><p className='square'>Sesje Reportażowe</p></Link>
   <Link className='box f' to={'/outdoors'}><p className='square'> Sesje Plenerowe</p></Link>
   </div>
   </div>
    </div>
    
    
    </>)
}

export default Offer