import { Ship } from './ship';
import { GameBoard } from './gameboard';

//factory function
const Player = () => {


};

//factory function
const Game = (() => {
	
	let init = () => {
		let gameboard = GameBoard();
		gameboard.init();

	}

	return {
		init
	};

})();

Game.init();