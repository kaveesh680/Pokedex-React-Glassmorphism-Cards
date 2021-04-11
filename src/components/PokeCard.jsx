import React from 'react'
export const PokeCard = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="contentBox">
                        <h3>Pokemon Name</h3>
                    </div>
                    <div className="ImageBox"> <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon" /> </div>
                    <div className="contentBox">
                        <h3>Type:Normal <br /> <span>Exp:120</span></h3>
                    </div>
                </div>
            </div>

        </div>

    )
}
