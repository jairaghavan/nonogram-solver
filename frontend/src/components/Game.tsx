import Board from "./Board";
import Clues from "./Clues";
import { useState } from "react";

function Game() {
    const size = 5;
    const [board, setBoard] = useState(Array(size).fill(Array(size).fill(false)));

    function handleClick(row: number, col: number) {
        const newBoard = board.map((r) => { return r.slice() })
        newBoard[row][col] = !newBoard[row][col]
        setBoard(newBoard)
    }

    return (
        <div className="game">
            <Clues></Clues>
            <Board sideLength={size} grid={board} handler={handleClick} />
            <div style={{marginTop: "20px"}}>
                <button>Check</button>
                <button>New Game</button>
            </div>
        </div>
    );
}

export default Game;
