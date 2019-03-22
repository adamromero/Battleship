import { GameBoard } from '../src/gameboard';

test ('testing board interaction', () => {
	let boardTest = GameBoard();
	boardTest.init();

	expect(boardTest.ships.get(1).name).toBe("Patrol Boat");
	expect(boardTest.board[0]).toBe(1);

	boardTest.receiveAttack(0, 0);
	expect(boardTest.board[0]).toBe(7);


	expect(boardTest.board[35]).toBe(0);
	boardTest.receiveAttack(3, 5);
	expect(boardTest.board[35]).toBe(6);

	expect(boardTest.allShipsSunk()).toBe(false);
});

