import { Ship } from './ship';
import { GameBoard } from './gameboard';
import { displayMessage } from './display';

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
				/*
				else if (board[row * 10 + col] !== 0) {
					status = `ship-block`;
				}*/
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
	let computerBoard = document.getElementById("computerboard");
	let playerBoard = document.getElementById("playerboard");

	const getAIAttackPosition = (board) => {
		let x, y;
		do {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * 10);
		}
		while (board[x * 10 + y] > 5);

		return { x, y };
	}

	return {
		getAIAttackPosition
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
	
	const deselectShips = (shipButtons) => {
		shipButtons.forEach((ship) => {
			ship.classList.remove("selected");
		});
	}

	const allShipsPlaced = (shipButtons) => {
		for (let i = 0; i < shipButtons.length; i++) {
			if (!shipButtons[i].disabled) {
				return false;
			}
		}
		return true;
	}

	const shipIsSelected = (shipButtons) => {
		for (let i = 0; i < shipButtons.length; i++) {
			if (shipButtons[i].classList.contains("selected")) {
				return true;
			}
		}
		return false;
	}

	let init = () => {
		let playerGameBoard = GameBoard();
		playerGameBoard.init();

		let computerGameBoard = GameBoard();
		computerGameBoard.init();
		computerGameBoard.randomlyPlaceShips();

		let dom = DOM();
		dom.renderPlayerBoard(playerGameBoard.getBoard());
		dom.renderComputerBoard(computerGameBoard.getBoard());

		let player = Player();
		let computer = Player();

		playerGameBoard.placeShip();
		let shipType, shipSize;

		displayMessage("Select your ships above and click on the Player board to position");

		const selectShips = document.querySelectorAll(".select-ship");
		for (let i = 0; i < selectShips.length; i++) {
			selectShips[i].addEventListener("click", function () {
				shipType = parseInt(this.getAttribute("data-ship"));
				shipSize = parseInt(this.getAttribute("data-size"));
				deselectShips(selectShips);
				this.classList.add("selected");
			});
		}
		
		document.getElementById("boardArena").addEventListener("click", function handleUI (event) {
			if (event.target.parentNode.parentNode.matches("#playerboard") && shipIsSelected(selectShips)) {
				let coords = getPosition(event.target);
				let orientation = document.querySelector("input[name=orientation]:checked").value ===  "horizontal";

				let selectedShip = document.querySelector("[data-ship='" + shipType + "']");
				if (!selectedShip.disabled && playerGameBoard.placeShip(coords.x, coords.y, orientation, shipType, shipSize)) {
					dom.renderPlayerBoard(playerGameBoard.getBoard());
					selectedShip.disabled = true;
					selectedShip.classList.remove("selected");
				}
				if (allShipsPlaced(selectShips)) {
					document.getElementById("horz").disabled = true;
					document.getElementById("vert").disabled = true;
				}
			} else if (allShipsPlaced(selectShips) && event.target.parentNode.parentNode.matches("#computerboard")) {
				let coords = getPosition(event.target);
				if (computerGameBoard.receiveAttack(coords.x, coords.y)) {
					computerGameBoard.shipHasSunk();
					if (computerGameBoard.allShipsSunk()) {
						displayMessage("You win!");
						document.getElementById("boardArena").removeEventListener("click", handleUI);
					}
					dom.renderComputerBoard(computerGameBoard.getBoard());

					let computerCoords = computer.getAIAttackPosition(playerGameBoard.getBoard());
					playerGameBoard.receiveAttack(computerCoords.x, computerCoords.y);
					if (playerGameBoard.allShipsSunk()) {
						displayMessage("Computer wins!");
						document.getElementById("boardArena").removeEventListener("click", handleUI);
					}
					dom.renderPlayerBoard(playerGameBoard.getBoard());
				}
			}
		});
	}

	return {
		init
	};

})();

Game.init();