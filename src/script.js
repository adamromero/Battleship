import { Ship } from './ship';
import { GameBoard } from './gameboard';

const DOM = () => {
	let playerBoard = document.getElementById("playerboard");
	let computerBoard = document.getElementById("computerboard");

	const renderPlayerBoard = (board) => {
		let template = `<div class="board">`;
		for (let row = 0; row < 10; row++) {
			for (let col = 0; col < 10; col++) {
				let status = ``;
				if (board[row * 10 + col] === 7) {
					status = `hit`;
				} else if (board[row * 10 + col] === 6) {
					status = `miss`;
				} else if (board[row * 10 + col] !== 0) {
					status = `ship-block`;
				}
				template += `<div class="column ${status}" data-index="${row * 10 + col}"></div>`;
			}
			template += `<div></div>`;
		}
		template += `</div>`;
		playerBoard.innerHTML = template;
	}

	const renderComputerBoard = (board) => {
		let template = `<div class="board">`;
		for (let row = 0; row < 10; row++) {
			for (let col = 0; col < 10; col++) {
				let status = ``;
				if (board[row * 10 + col] === 7) {
					status = `hit`;
				} else if (board[row * 10 + col] === 6) {
					status = `miss`;
				}
				template += `<div class="column ${status}" data-index="${row * 10 + col}"></div>`;
			}
			template += `<div></div>`;
		}
		template += `</div>`;
		computerBoard.innerHTML = template;
	}

	return {
		renderPlayerBoard, renderComputerBoard
	};
}

//factory function
const Player = () => {

	const attackBoard = () => {

	}

	const AI_attackBoard = () => {

	}

	return {
		attackBoard, AI_attackBoard
	};
};

//factory function
const Game = (() => {
	
	let init = () => {
		let playerGameBoard = GameBoard();
		playerGameBoard.init();
		let computerGameBoard = GameBoard();
		computerGameBoard.init();

		let dom = DOM();
		dom.renderPlayerBoard(playerGameBoard.getBoard());
		dom.renderComputerBoard(computerGameBoard.getBoard());

		let player = Player();
		player.attackBoard();

		let computer = Player();
		computer.AI_attackBoard();
	}

	return {
		init
	};

})();

Game.init();