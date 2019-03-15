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

	let deselectShips = () => {
		shipButtons.forEach((ship) => {
			ship.classList.remove("selected");
		});
	}

	let selectShips = () => {
		let positions = document.getElementById("playerboard").getElementsByClassName("column");
		let shipSize = 0;
		let shipType = "";

		for (let i = 0; i < shipButtons.length; i++) {
			shipButtons[i].addEventListener("click", function () {
				shipSize = parseInt(this.getAttribute("data-size"));
				shipType = this.getAttribute("data-ship");
				deselectShips();
				this.classList.add("selected");
			});
		}

		for (let i = 0; i < positions.length; i++) {
			positions[i].addEventListener("click", function() {
				let index = parseInt(this.getAttribute("data-index"));
				if (shipSize > 0) {
					if (validShipPosition(index, shipSize)) {
						document.querySelector("[data-ship='" + shipType + "'").disabled = true;
						deselectShips();
						shipSize = 0;
					} 
				}				
			});
		}
	}

	let positionShips = (positions, shipSize) => {
		for (let i = 0; i < positions.length; i++) {
			positions[i].addEventListener("click", function() {
				let index = parseInt(this.getAttribute("data-index"));
				validShipPosition(index, shipSize);
			});
		}
	}

	let validShipPosition = (index, shipSize) => {
		let orientation = document.querySelector("[name='orientation']:checked");
		let increment = 10;
		let max = shipSize * 10 + index - 10;

		if (orientation.value === "horizontal") {
			increment = 1;
			max = index + shipSize - 1;

			if (index % 10 + shipSize > 10) {
				display("Ship out of bounds, try again");
				return false;
			}
		}

		if (max >= 100) {
			display("Ship out of bounds, try again");
			return false;
		}

		for (let i = index; i <= max; i += increment) {
			let position = document.querySelector("[data-index='" + i + "']");

			if (position.classList.contains("ship-block")) {
				display("Ship position overlapping, try again");
				return false;
			}
		}

		renderShip(index, max, increment);
		display("");
		return true;
	}

	let renderShip = (index, max, increment) => {
		for (let i = index; i <= max; i += increment) {
			let position = document.querySelector("[data-index='" + i + "']");
			position.classList.add("ship-block");
		}
	}

	let display = (message) => {
		document.getElementById("message").innerText = message;
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