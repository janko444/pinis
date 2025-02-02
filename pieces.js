const isMoveValid = (piece, fromRow, fromCol, toRow, toCol) => {
    let rowDiff = Math.abs(toRow - fromRow);
    let colDiff = Math.abs(toCol - fromCol);

    switch (piece) {
        case '♙': return (toRow === fromRow - 1 && toCol === fromCol); // Pionek biały
        case '♟': return (toRow === fromRow + 1 && toCol === fromCol); // Pionek czarny
        case '♖': case '♜': return (fromRow === toRow || fromCol === toCol); // Wieża
        case '♘': case '♞': return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2); // Skoczek
        case '♗': case '♝': return rowDiff === colDiff; // Goniec
        case '♕': case '♛': return rowDiff === colDiff || fromRow === toRow || fromCol === toCol; // Hetman
        case '♔': case '♚': return rowDiff <= 1 && colDiff <= 1; // Król
        default: return false;
    }
};
