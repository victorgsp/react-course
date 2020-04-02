import React from 'react'
import Filho from './Filho'

export default props => {
    let notificarSaida = lugar => {
        alert(`Filho vai sair para ${lugar}`);
    }


    return (
        <div>
            <Filho notificarSaida={notificarSaida}></Filho>
        </div>
    )
}