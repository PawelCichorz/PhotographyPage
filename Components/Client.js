import {useEffect, useState} from 'react'
import './client.css'
import {Link} from "react-router-dom"
import Regulamin from '../img/Reg.pdf' 
import Polityka from '../img/Polityka.pdf' 






function Client (props) {

 
  

    const initialState ={
        propA:'',
        propB:'',
        propC:'',
        propD:'',
        propE:'',
        propF:'',
        propG:'',
        propH:'',
        propI:'',
        propJ:'',
        propK:'',
        boa:'',
        bob:'',
        boc:'',
        bod:'',
        boe:'',
        bof:'',
        bog:'',
        boh:'',
        boi:'',
        boj:'',
        bok:''
    }
const [myState,SetmyState] =useState(initialState)
const [clin,Setclin] =useState('none')
const [checker,Setchecker] =useState(true)




// const chan = (a,b,c,d) =>
// {
//     if(myState.propA =='') {
//    SetmyState({...myState,
// propA:`Kiedy ustalimy termin, zawsze podpytuję o preferencje: plener czy
//    wnętrze, ile będzie osób i w jakim wieku. Wszystko zależy od
//    Waszych upodobań. Jeśli macie konkretne miejsce, w którym
//    chcielibyście zdjęcia, oceniam, czy jest to możliwe(światło, warunki
//    atmosferyczne). Jeśli nie macie pomysłu, nie martwcie się-ja podam
//    swoje propozycje.`,bor:'2px solid black'})}

// else{
//     SetmyState({...myState,
//         propA:'',bor:''})
        
  
// }
// }

const cha = () => {
    if(clin == 'none'){
    Setclin('flex')
    Setchecker(false)

}
    
    else{
        Setclin('none')
        Setchecker(true)

    }
}



const chan = () =>
{
    if(myState.propA =='') {
   SetmyState({...myState,
propA:`Kiedy ustalimy termin, zawsze podpytuję o preferencje: plener czy
wnętrze, ile będzie osób i w jakim wieku. Wszystko zależy od
Waszych upodobań. Jeśli macie konkretne miejsce, w którym
chcielibyście zdjęcia, oceniam, czy jest to możliwe(światło, warunki
atmosferyczne). Jeśli nie macie pomysłu, nie martwcie się-ja podam
swoje propozycje.`,bob:'2px solid black'})}

else{
    SetmyState({...myState,
      propA:'',bob:''})
        
  
}
}

const chan1 = () =>
{
    if(myState.propB =='') {
   SetmyState({...myState,
propB:`Na zdjęciach najlepiej sprawdzają się ubrania wygodne, i takie w
których się dobrze czujecie. Ważne, aby nie miały napisów, naklejek,
dużych wzorów. Dobrze wyglądają stroje w miarę jednolite,
utrzymane w podobnej tonacji(staramy się nie wprowadzać więcej niż
3/4kolory). Postaraj się też dopasować strój do klimatu miejsca sesji,
jeśli np. będzie to las, zostaw pantofle i krawat w domu ;) na pewno
lepiej sprawdzi się luźna koszula, przewiewne spodnie. Jeśli natomiast
elegancka miejska sesja-szykowne sukienki będą w sam raz. Jeśli
jedna osoba zakłada coś wzorzystego, w kwiaty, paski, kropki, niech
reszta uczestników sesji będzie ubrana w jednolite barwy, inaczej
wprowadzimy za dużo gryzących się ze sobą wzorów.`,boa:'2px solid black'})}

else{
    SetmyState({...myState,
      propB:'',boa:''})
        
  
}
}

const chan2 = () =>
{
    if(myState.propC =='') {
   SetmyState({...myState,
propC:`Tak, przygotowałam dla Was studio w klimacie boho. Zapraszam do
obejrzenia jego zdjęć na stronie.`,boc:'2px solid black'})}

else{
    SetmyState({...myState,
      propC:'',boc:''})
        
  
}
}
const chan3 = () =>
{
    if(myState.propD =='') {
   SetmyState({...myState,
propD:`Jedyny ewentualny problem to zbyt mała ilość światła. Z tego
względu na sesje w domu umawiamy się między godziną 10-16. Przed
sesją proszę Was, abyście wysłali mi kilka zdjęc z Waszego domu,
abym mogła ocenić, czy damy radę :)
 
Przed sesją proszę, aby uprzątnąć wszelkie kable, ładowarki, płyny,
proszki. Jednym słowem wszystko, co może rozpraszać uwagę od
głównych postaci na zdjęciach.
 
Co do wystroju, mebli itp. nie ma to żadnego znaczenia. To wasz
dom, Wasze wspomnienia i o to w tym chodzi !`,bod:'2px solid black'})}

else{
    SetmyState({...myState,
      propD:'',bod:''})
        
  
}
}

const chan4 = () =>
{
    if(myState.propE =='') {
   SetmyState({...myState,
propE:`Zależnie od pakietu, ale 1-2 godziny, jeśli wszystko idzie zgodnie z
planem ;)`,boe:'2px solid black'})}

else{
    SetmyState({...myState,
      propE:'',boe:''})
        
  
}
}


const chan5 = () =>
{
    if(myState.propF =='') {
   SetmyState({...myState,
propF:`Czas oczekiwania to 2-4 tygodni. Oczywiście, jeśli uda mi się
wcześniej, nie zawaham się tego zrobić!;)`,bof:'2px solid black'})}

else{
    SetmyState({...myState,
      propF:'',bof:''})
        
  
}
}

const chan6 = () =>
{
    if(myState.propG =='') {
   SetmyState({...myState,
propG:`Nie. Udostępniam tylko zdjęcia poddane mojej obróbce.`,bog:'2px solid black'})}

else{
    SetmyState({...myState,
      propG:'',bog:''})
        
  
}
}

const chan7 = () =>
{
    if(myState.propH =='') {
   SetmyState({...myState,
propH:`Drobne mankamenty urody takie jak: blizny, pieprzyki, krostki,
siniaki itp. usuwam. Natomiast nie odchudzam, niczego nie
powiększam, nie pomniejszam, nie zmieniam koloru oczu, czy
włosów. Ja staram się rejestrować rzeczywistość i cenię naturalność.
Dlatego na moich zdjęciach są prawdziwi ludzie, z delikatnym
podkreśleniem ich naturalnego piękna.`,boh:'2px solid black'})}

else{
    SetmyState({...myState,
      propH:'',boh:''})
        
  
}
}

const chan8 = () =>
{
    if(myState.propI =='') {
   SetmyState({...myState,
propI:`Tak naprawdę, to Ty wiesz najepiej jak się czujesz. Optymalny czas to
7/8 miesiąc, kiedy to widać już ładnie brzuszek, a Ty czujesz się
spokojna.`,boi:'2px solid black'})}

else{
    SetmyState({...myState,
      propI:'',boi:''})
        
  
}
}

const chan9 = () =>
{
    if(myState.propJ =='') {
   SetmyState({...myState,
propJ:`Tak jak wspominałam, lubię naturalność. Ale faktycznie chociaż lekki
makijaż znacznie poprawia efekt końcowy. Możesz skorzystać z usług
wizażystki, albo pomalować się sama. Główną pracę wykonuje tu
fluid, który wyrówna koloryt skóry.`,boj:'2px solid black'})}

else{
    SetmyState({...myState,
      propJ:'',boj:''})
        
  
}
}

const chan10 = () =>
{
    if(myState.propK =='') {
   SetmyState({...myState,
propK:`Usuń z widocznych obszarów wszelkie płyny, proszki do prania i inne rozpraszacze.  
Uporządkuj ilość kabli i ładowarek, zaleca się, aby podczas sesji nie było tego typu przedmiotów w gniazdkach. 
Często sesje w domu odbywają się na łóżku w sypialni, dlatego warto przygotować jasną, jednolitą pościel. 
Zabawki mogą być ciekawym elementem na zdjęciach, jednak unikaj ich nadmiernego nagromadzenia. 
Jeśli twoje mieszkanie jest dość ciemne, odsłoń wszystkie firanki i zasłony.`,bok:'2px solid black'})}

else{
    SetmyState({...myState,
      propK:'',bok:''})
        
  
}
}


    return( <>
<div className='client'>
    <div className='clientquestion shad'  >
        <h3 className='mostpopularq' >Najczęściej zadawane pytania</h3>
        {checker ? <button className='butts' onClick={cha}><i class="fa-solid fa-arrow-down"></i></button> : <button className='butts' onClick={cha}><i class="fa-solid fa-arrow-up"></i></button>  }
      <div className='questions1 flex ' style={{display:`${clin}`}}>
        <p className='m' onClick={chan}>Gdzie zrobimy sesję ?<p className='inside' style={{border:`${myState.bob}`}}>{myState.propA}</p></p>
      </div>
      <div className='questions2 flex ' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan1} > W co mam się ubrać ?<p className='inside' style={{border:`${myState.boa}`}}>{myState.propB}</p></p>
      </div>
      <div className='questions3 flex ' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan2} > Czy robisz zdjęcia w studiu fotograficznym?<p className='inside' style={{border:`${myState.boc}`}}>{myState.propC}</p></p>
      </div>
      <div className='questions4 flex ' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan3} > Martwie się, że mój dom nie nadaje się do zdjęć<p className='inside' style={{border:`${myState.bod}`}}>{myState.propD}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan4} > Ile trwa sesja ?<p className='inside' style={{border:`${myState.boe}`}}>{myState.propE}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan5} > Kiedy dostanę zdjęcia ?<p className='inside' style={{border:`${myState.bof}`}}>{myState.propF}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan6} > Czy dostanę zdjęcia bez obróbki ?<p className='inside' style={{border:`${myState.bog}`}}>{myState.propG}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan7} > Czy usuniesz mi niedoskonałości w Photoshop?<p className='inside' style={{border:`${myState.boh}`}}>{myState.propH}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan8} > W jakim miesiącu najlepiej zrobić sesję brzuszkową?<p className='inside' style={{border:`${myState.boi}`}}>{myState.propI}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan9} > Co z makijażem/fryzurą?<p className='inside' style={{border:`${myState.boj}`}}>{myState.propJ}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m ' onClick={chan10} > Jak przygotować mieszkanie do sesji ?<p className='inside' style={{border:`${myState.bok}`}}>{myState.propK}</p></p>
      </div>
      <div className='questions4 flex' style={{display:`${clin}`}}>
        <p className='n m mw ' > Jeśli masz jakiekolwiek pytania skontaktuj się ze mną !</p>
      </div>
    </div>
    <div className='download shad' >
     <h3>Do Pobrania:</h3> 
      <a  className='ahref' href={Regulamin} target="_blank" rel="noopener noreferrer"> Regulamin Sesji
     </a>

      
      <a className='ahref' href={Polityka} target="_blank" rel="noopener noreferrer">Polityka Prywatności + RODO</a>
    </div>
    </div>
    
    </>)
}

export default Client