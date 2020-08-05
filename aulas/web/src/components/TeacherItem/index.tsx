import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/2057387?s=460&v=4" alt="Bruno Julião"/>
                <div>
                    <strong>Bruno Julião</strong>
                    <span>C#</span>
                </div>
            </header>

            <p>
                Testando a primeira linha da descrição 
                <br/><br/>
                Muito texto para alcançar as três linhas do layout base e assim poder validar se os ajustes aplicados no CSS estão adequados/corretos. Caso não esteja, favor corrigir.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;