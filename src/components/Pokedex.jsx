import React from 'react'
import PokeDetails from './Details.jsx';
import { PokeCard } from './PokeCard.jsx';
import { Header } from './Header.jsx';

export const Pokedex = () => {

    return (
        <div>
            <Header />
            <div className="Pokedex-Card">
                {PokeDetails.map(card =>
                    < PokeCard type={card.type} Exp={card.base_experience} name={card.name} image={card.id <= 999 ? `00${card.id}`.slice(-3) : card.id} />
                )}
            </div>
        </div>
    )
}
