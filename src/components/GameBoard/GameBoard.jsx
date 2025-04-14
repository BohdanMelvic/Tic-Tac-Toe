import { useState } from "react"

const initilBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = ({ activePlayer, handleActivePlayer }) => {
    const [gameBoard, setGameBoard] = useState(initilBoard)

    const handleSelectedSquare = (rowIndex, colIndex) => {
        setGameBoard((prevBoard) => {
            const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]

            updatedBoard[rowIndex][colIndex] = activePlayer

            return updatedBoard
        })

        handleActivePlayer()
    }

    return (
        <ol id='game-board'>
           {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
               <ol>
                    {row.map((col, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{col}</button>
                        </li>)}
               </ol>
           </li>)}
        </ol>
    )
}

export default GameBoard