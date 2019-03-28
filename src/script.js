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

const message = () => {

}

//factory function
const Player = () => {
	let computerBoard = document.getElementById("computerboard");
	let playerBoard = document.getElementById("playerboard");
	let message = document.getElementById("message");

	const AI_attackBoard = (board) => {

	}

	const displayMessage = (msg) => {
		message.textContent = msg;
	}

	return {
		AI_attackBoard
	};
};

//factory function
const Game = (() => {

	const getPosition = (position) => {
		let index = position.getAttribute("data-index");
		let x = parseInt(index / 10);
		let y = index % 10;
		return { x, y };
	}
	
	let init = () => {
		let playerGameBoard = GameBoard();
		playerGameBoard.init();

		let computerGameBoard = GameBoard();
		computerGameBoard.init();

		let dom = DOM();
		dom.renderPlayerBoard(playerGameBoard.getBoard());
		dom.renderComputerBoard(computerGameBoard.getBoard());

		let player = Player();

		playerGameBoard.placeShip();

		document.getElementById("boardArena").addEventListener("click", function (event) {
			if (event.target.parentNode.parentNode.matches("#playerboard")) {
				let coords = getPosition(event.target);
				let orientation = document.querySelector("input[name=orientation]:checked").value ===  "horizontal";
				playerGameBoard.placeShip(coords.x, coords.y, orientation);
			}

			if (event.target.parentNode.parentNode.matches("#computerboard")) {
				let coords = getPosition(event.target);
				if (computerGameBoard.receiveAttack(coords.x, coords.y)) {
					dom.renderComputerBoard(computerGameBoard.getBoard());
				}
			}
		});

		//let computer = Player();
		//computer.AI_attackBoard(playerGameBoard.getBoard());
	}

	return {
		init
	};

})();

Game.init();