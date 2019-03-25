import { Ship } from '../src/ship';

const GameBoard = () => {

	let board = [
		1, 1, 0, 0, 0, 0, 0, 5, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 5, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 5, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 5, 0, 0,
		2, 0, 3, 3, 3, 7, 0, 5, 0, 0,
		2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		2, 0, 0, 0, 0, 6, 6, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 4, 4, 4, 4, 0, 0
	];
	let ships = new Map();
	const BOARD_COL = 10;
	const boardValues = {
		SHIPS: {
			PATROL: 1,
			DESTROYER: 2,
			SUBMARINE: 3,
			BATTLESHIP: 4,
			CARRIER: 5
		},
		STATUS: {
			EMPTY: 0,
			MISS: 6,
			HIT: 7
		}
	};

	//const shipButtons = document.querySelectorAll(".select-ship");

	const init = () => {
		/*
		for (let row = 0; row < BOARD_COL; row++) {
			for (let col = 0; col < BOARD_COL; col++) {
				board[row * BOARD_COL + col] = boardValues.STATUS.EMPTY;
			}
		}*/

		ships.set(boardValues.SHIPS.PATROL, Ship("Patrol Boat", 2));
		ships.set(boardValues.SHIPS.DESTROYER, Ship("Destroyer", 3));
		ships.set(boardValues.SHIPS.SUBMARINE, Ship("Submarine", 4));
		ships.set(boardValues.SHIPS.BATTLESHIP, Ship("Battleship", 4));
		ships.set(boardValues.SHIPS.CARRIER, Ship("Carrier", 5));
	}

	const placeShip = (x, y, rotate) => {
		for (let row = 0; row < BOARD_COL; row++) {
			for (let col = 0; col < BOARD_COL; col++) {
				
			}
		} 
	}

	const receiveAttack = (x, y) => {
		if (board[x * BOARD_COL + y] === boardValues.SHIPS.PATROL ||
			board[x * BOARD_COL + y] === boardValues.SHIPS.SUBMARINE ||
			board[x * BOARD_COL + y] === boardValues.SHIPS.DESTROYER ||
			board[x * BOARD_COL + y] === boardValues.SHIPS.BATTLESHIP ||
			board[x * BOARD_COL + y] === boardValues.SHIPS.CARRIER) {
			ships.get(board[x * BOARD_COL + y]).hit();
			board[x * BOARD_COL + y] = boardValues.STATUS.HIT;
		} else if (board[x * BOARD_COL + y] === boardValues.STATUS.HIT || 
			board[x * BOARD_COL + y] === boardValues.STATUS.MISS) {

		} else if (board[x * BOARD_COL + y] === boardValues.STATUS.EMPTY) {
			board[x * BOARD_COL + y] = boardValues.STATUS.MISS;
		}
	}

	const allShipsSunk = () => {
		for (let row = 0; row < BOARD_COL; row++) {
			for (let col = 0; col < BOARD_COL; col++) {
				if (board[row * BOARD_COL + col] === boardValues.SHIPS.PATROL ||
					board[row * BOARD_COL + col] === boardValues.SHIPS.SUBMARINE ||
					board[row * BOARD_COL + col] === boardValues.SHIPS.DESTROYER ||
					board[row * BOARD_COL + col] === boardValues.SHIPS.BATTLESHIP ||
					board[row * BOARD_COL + col] === boardValues.SHIPS.CARRIER) {
					return false;
				}
			}
		}
		return true;
	}

	const getBoard = () => {
		return board;
	}

	return {
		init, placeShip, receiveAttack, getBoard, ships, allShipsSunk
	};
};

export { GameBoard };