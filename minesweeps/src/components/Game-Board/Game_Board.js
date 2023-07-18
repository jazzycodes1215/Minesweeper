import { createElement } from 'react';
import './Game_Board.css';

export default function Game_Board() {
    const grid = document.querySelectorAll('.grid');
    let width = 500
    let squares = []

    const createBoard = () => {

        for (let i = 0; i < width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }

    }

    createBoard()

    return(
        <div id='gris' className='grid'></div>
    )
}
