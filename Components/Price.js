import {useEffect, useState} from 'react'
import './price.css'





function Price (props) {


    return( <>
    <div className='price' id='cennik'>
        <div className='lifestyle'>
        <h2 className='h2h2'>SESJE STUDIO/PLENER</h2>
        <div className='cards'>
    <div className='card'>
    <div className='img one'>
        <h3 className='pakietname'>Pakiet Silver</h3>
        <p className='pricelass'>Od 400 zł</p>
        <button className='butt'>Szczegoły</button>
        </div>
        <div className='text text-one point'>
        
        <p className='points'>Czas Trwania około 1h</p>
        <p className='points'>Sesja w domu / studio lub plenerze</p>
        <p className='points'>10 zdjęć</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>10 wydruków 15 x 23</p>
    </div>

    </div>

    <div className='card'>
    <div className='img one'>
    <h3 className='pakietname'>Pakiet Gold</h3>
        <p className='pricelass'>Od 550 zł</p>
        <button className='butt'>Szczegoły</button>
    </div>

    <div className='text text-one point'>
        
        <p className='points'>Czas Trwania około 2h</p>
        <p className='points'>Sesja w domu / studio lub plenerze</p>
        <p className='points'>15  zdjęć</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>10 wydruków 15 x 23</p>
    </div>

    </div>

  
    </div>
    </div>
    
    <div className='reportage'>       
    <h2 className='h2h2'>SESJE REPORTAŻOWE</h2>
        <div className='cards'>
    <div className='card'>
    <div className='img one'>
        <h3 className='pakietname'>Pakiet Silver</h3>
        <p className='pricelass'>Od 400 zł</p>
        <button className='butt'>Szczegóły</button>
        </div>
        <div className='text text-one point'>
        
        <p className='points'>Reportaż około 1h</p>
        <p className='points'>Chrzty / Śluby / Uroczytości</p>
        <p className='points'>20 zdjęć</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>10 wydruków 15 x 23</p>
    </div>

    </div>

    <div className='card'>
    <div className='img one'>
    <h3 className='pakietname'>Pakiet Gold</h3>
        <p className='pricelass'>Od 550 zł</p>
        <button className='butt'>Szczegóły</button>
    </div>

    <div className='text text-one point'>
        
    <p className='points'>Reportaż około 3h</p>
        <p className='points'>Chrzty / Śluby / Uroczytości</p>
        <p className='points'>40  zdjęć</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>20 wydruków 15 x 23</p>
    </div>

    </div>

  
    </div>
    </div>
    <div className='property'>       
    <h2 className='h2h2'>SESJE NIERUCHOMOŚCI</h2>
        <div className='cards'>
    <div className='card'>
    <div className='img one'>
        <h3 className='pakietname'>Pakiet Silver</h3>
        <p className='pricelass'>Od 250 zł</p>
        <button className='butt'>Szczegóły</button>
        </div>
        <div className='text text-one point'>
        
        <p className='points'>Małe mieszkania/Kawalerki</p>
        <p className='points'>6-8 zdjęć</p>
        <p className='points'>mały home-staging</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>Szybki czas realizacji</p>
        
    </div>

    </div>

    <div className='card'>
    <div className='img one'>
    <h3 className='pakietname'>Pakiet Gold</h3>
        <p className='pricelass'>Od 350 zł</p>
        <button className='butt'>Szczególy</button>
    </div>

    <div className='text text-one point'>
        
        <p className='points'>Duże Mieszkania</p>
        <p className='points'>10 zdjęć</p>
        <p className='points'>mały home-staging</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>Szybki czas realizacji</p>
    </div>

    </div>
    <div className='card'>
    <div className='img one'>
    <h3 className='pakietname'>Pakiet Platinum</h3>
        <p className='pricelass'>Od 550 zł</p>
        <button className='butt'>Szczegóły</button>
    </div>

    <div className='text text-one point'>
        
        <p className='points'>Domy/Lokale/Biura</p>
        <p className='points'>10-12 zdjęć</p>
        <p className='points'>mały home-staging</p>
        <p className='points'>Zdjęcia w formie elektronicznej</p>
        <p className='points'>Szybki czas realizacji</p>
    </div>

    </div>

  
    </div></div>

    <p className='downdown'>*Oferta nie stanowi oferty handlowej w rozumieniu artykułu 71 kodeksu cywilnego</p>
    <p className='downdown'>*Za dodatkową opłatą usługa pełnego home-stagingu</p>
    <p className='downdown'>*Każda z podanych cen może ulec zmianie po zapoznaniu się z warunkami pracy i oczekiwaniami klienta</p>
    </div>
    
    
    </>)
}

export default Price