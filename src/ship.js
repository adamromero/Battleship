// factory function
const Ship = (name, size) => {
	let numHits = 0;

	const hit = () => {
		numHits++;
	}

	const isSunk = () => {
		return numHits === size;
	}

	return { name, size, numHits, hit, isSunk };
};

export { Ship };