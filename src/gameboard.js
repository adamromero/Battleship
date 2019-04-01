import { Ship } from '../src/ship';
import { displayMessage } from '../src/display';

const GameBoard = () => {

	let board = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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

	const init = () => {
		ships.set(boardValues.SHIPS.PATROL, Ship("Patrol Boat", 2));
		ships.set(boardValues.SHIPS.DESTROYER, Ship("Destroyer", 3));
		ships.set(boardValues.SHIPS.SUBMARINE, Ship("Submarine", 4));
		ships.set(boardValues.SHIPS.BATTLESHIP, Ship("Battleship", 4));
		ships.set(boardValues.SHIPS.CARRIER, Ship("Carrier", 5));
	}

	const placeShip = (x, y, rotate, type, size) => {
		let index = x * BOARD_COL + y;
		let max = size * 10 + index - 10;
		let increment = 10;

		if (rotate) {
			max = index + size - 1;
			increment = 1;

			if (index % 10 + size > 10) {
				displayMessage("Ship out of bounds, try again");
				return false;
			}
		}

		if (max >= 100) {
			displayMessage("Ship out of bounds, try again");
			return false;
		}

		for (let i = index; i <= max; i += increment) {
			if (board[i] !== boardValues.STATUS.EMPTY) {
				displayMessage("Position is overlapping ship, try again");
				return false;
			}
		} 

		for (let i = index; i <= max; i += increment) {
			if (board[i] === boardValues.STATUS.EMPTY) {
				board[i] = type;
			}
		} 

		return true;
	}

	const randomlyPlaceShips = () => {
		let index = 1;
		while (index <= 5) {
			let x = Math.floor(Math.random() * 10);
			let y = Math.floor(Math.random() * 10);
			let rotate = Math.floor(Math.random() * 2);
			let type = index;
			let size = ships.get(index).size;

			if (placeShip(x, y, rotate, type, size)) {
				index++;
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
			displayMessage(ships.get(board[x * BOARD_COL + y]).name + " hit!");
			board[x * BOARD_COL + y] = boardValues.STATUS.HIT;
			return true;
		} else if (board[x * BOARD_COL + y] === boardValues.STATUS.HIT || 
			board[x * BOARD_COL + y] === boardValues.STATUS.MISS) {
			displayMessage("Position already hit!");
			return true;
		} else if (board[x * BOARD_COL + y] === boardValues.STATUS.EMPTY) {
			board[x * BOARD_COL + y] = boardValues.STATUS.MISS;
			displayMessage("Missed!");
			return true;
		}

		return false;
	}

	const shipHasSunk = () => {
		for (let i = 1; i <= 5; i++) {
			if (typeof ships.get(i) !== "undefined") {
				if (ships.get(i).isSunk()) {
					let shipName = ships.get(i).name;
					ships.delete(i);
					displayMessage(shipName + " has sunk");
				}
			}
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
		init, placeShip, receiveAttack, getBoard, ships, allShipsSunk, randomlyPlaceShips, shipHasSunk
	};
};

export { GameBoard };