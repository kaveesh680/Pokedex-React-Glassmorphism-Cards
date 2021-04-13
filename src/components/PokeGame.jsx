import React from 'react'
import PokeDetails from './Details.jsx';
import { PokeCard } from './PokeCard.jsx';
import { Header } from './Header.jsx';

const teamOne = [];
const teamTwo = [];

for (var i = 0; i < 4; i++) {
    teamOne.push(PokeDetails[Math.floor(Math.random() * 8)]);
    teamTwo.push(PokeDetails[Math.floor(Math.random() * 8)]);
}
const teamOneExp = teamOne.reduce((n, { base_experience }) => n + base_experience, 0);
const teamTwoExp = teamTwo.reduce((n, { base_experience }) => n + base_experience, 0);


export const PokeGame = () => {
    return (
        <div>
            <Header />
            <div className="winning-status">{teamOneExp > teamTwoExp ? "win" : "lose"}</div>
            <div className="Pokedex-Card">
                {teamOne.map(card =>
                    < PokeCard type={card.type} Exp={card.base_experience} name={card.name} image={card.id <= 999 ? `00${card.id}`.slice(-3) : card.id} />
                )}
            </div>
            <div className="winning-status">{teamOneExp < teamTwoExp ? "win" : "lose"}</div>
            <div className="Pokedex-Card">
                {teamTwo.map(card =>
                    < PokeCard type={card.type} Exp={card.base_experience} name={card.name} image={card.id <= 999 ? `00${card.id}`.slice(-3) : card.id} />
                )}
            </div>
        </div>
    )
}
