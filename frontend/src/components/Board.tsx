import Square from './Square';

function Board({sideLength, grid, handler}: {sideLength: number, grid?: boolean[][], handler: (x:number,y:number) => void} ) {
    const board = []

    // initialize board w/ Squares
    for (let i = 0; i < sideLength; i++) {
        const row = []
        for (let j = 0; j < sideLength; j++) {
            row.push(<Square filled={grid? grid[i][j]: false} squareClick={() => handler(i, j)}/>)
        }
        board.push(<div className="row">{row}</div>)
    }
    
    return (
        <div>
            {board}
        </div>
    );
}

export default Board;