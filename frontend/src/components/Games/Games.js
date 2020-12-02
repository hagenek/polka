import React from 'react'
import { Link } from "react-router-dom"
import SnakeImg from "../../assets/snake.png"
import Memory from "../../assets/memory.png"


function Games() {
    return (
        <div>
            <section className="event__section">
                <h1>Find a game you like here:</h1>
            </section>
            <Link className="linkToGames" to="/memory">
                <h3>Memory</h3>
                <img
                    className="game__image"
                    src={Memory}
                    alt="memory game"
                />
            </Link>
            <Link className="linkToGames" to="/snake">
                <h3>Snake</h3>
                <img
                    className="game__image"
                    src={SnakeImg}
                    alt="snake game"
                />
            </Link>
        </div>
    )
}

export default Games
