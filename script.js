// factory function
const Ship = () => {

	let hit = () => {

	}

	let isSunk = () => {


	}
};

//factory function
const Player = () => {


};

const Gameboard = () => {
	let board = [];
	let shipButtons = document.querySelectorAll(".select-ship");

	let render = () => {
		let source = `<div class='board'>`;
		for (let row = 0; row < 10; row++) {
			source += `<div class="row">`;
			for (let col = 0; col < 10; col++) {
				source += `<div class="column" data-index="${row * 10 + col}"></div>`;
			}
			source += `</div>`;
		}
		source += `</div>`;

		document.getElementById("playerboard").innerHTML = source;
		document.getElementById("computerboard").innerHTML = source;
	}

	let selectShips = () => {
		let positions = document.getElementById("playerboard").getElementsByClassName("column");
		let shipSize = 0;
		let shipType = "";

		for (let i = 0; i < shipButtons.length; i++) {
			shipButtons[i].addEventListener("click", function () {
				shipSize = parseInt(this.getAttribute("data-size"));
				shipType = this.getAttribute("data-ship");
			});
		}

		for (let i = 0; i < positions.length; i++) {
			positions[i].addEventListener("click", function() {
				let index = parseInt(this.getAttribute("data-index"));
				if (shipSize > 0) {
					renderShip(index, shipSize);
					shipSize = 0;
					document.querySelector("[data-ship='" + shipType + "'").disabled = true;
				}				
			});
		}
	}

	let positionShips = (positions, shipSize) => {
		for (let i = 0; i < positions.length; i++) {
			positions[i].addEventListener("click", function() {
				let index = parseInt(this.getAttribute("data-index"));
				renderShip(index, shipSize);
			});
		}
	}

	let renderShip = (index, shipSize) => {
		let orientation = document.querySelector("[name='orientation']:checked");
		let increment = 10;
		let max = shipSize * 10 + index;

		if (orientation.value === "horizontal") {
			increment = 1;
			max = index + shipSize;
		}

		for (let j = index; j < max; j += increment) {
			document.querySelector("[data-index='" + j + "']").classList.add("ship-block");
		}
	}

	return {
		render, 
		selectShips
	};
};

//factory function
const Game = (() => {
	
	let init = () => {
		let playerBoard = Gameboard();
		playerBoard.render();

		let computerBoard = Gameboard();
		computerBoard.render();

		playerBoard.selectShips();

	}

	return {
		init
	};

})();

Game.init();