import { Ship } from '../src/ship';

test ('creates a ship', () => {
	
	let shipTest = Ship("patrol", 2);
	expect(shipTest.name).toBe("patrol");
	expect(shipTest.size).toBe(2);
	expect(shipTest.isSunk()).toBe(false);
	
});