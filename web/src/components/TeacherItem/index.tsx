import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './index.css'

export const TeacherItem = () =>{
    
    return(
        <article className="teacher-item">
        <header>
           <img src="https://avatars2.githubusercontent.com/u/26354464?s=460&u=47e7e207e0eda6904f2115979e5a14acef263a1e&v=4" alt="Mateus Silva"/> 
           <div>
               <strong>Mateus Silva</strong>
               <span>Mecânica quântica</span>
           </div>
        </header>
        <p>
                   Entusiasta dos mistérios do micro universo de párticulas, estudioso na área de mecânica quantica e suas 
                     <br></br>
                   relações no mundo real e espiritual, irá te ensinar uma visão diferente de enxergar o vasto universo de párticulas.
               </p>
               <footer>
                   <p>
                       Preço/Hora
                       <strong>R$42,00</strong>
                   </p>
                   <button type="button">
                     <img src={whatsappIcon} alt="Whatsapp" />
                     Entrar em contato
                   </button> 
               </footer>
    </article>
    );
}