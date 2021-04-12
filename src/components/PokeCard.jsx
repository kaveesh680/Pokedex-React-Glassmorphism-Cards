import React from 'react'
export const PokeCard = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="contentBox">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="ImageBox"> <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + props.image + ".png"} alt="pokemon" /> </div>
                    <div className="contentBox">
                        <h3>Type:{props.type} <br /> <span>Exp:{props.Exp}</span></h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
