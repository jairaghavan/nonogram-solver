function Square( {filled, squareClick}: {filled: boolean, squareClick: () => void} ) {
    return <div className={filled? "square filled": "square"} onClick={squareClick}></div>
}

export default Square;