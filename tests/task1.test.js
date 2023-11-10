import { returnStatusHealth } from "../src/js/task1.js"

test("empty object", () => {
	const received = returnStatusHealth();
	const expected = "Не передан персонаж";

	expect(received).toBe(expected);
})


test("health <= 100 && > 50", () => {
	const character = {
		name: "Maks",
		health: 77,
	}
	const received = returnStatusHealth(character);
	const expected = "healthy";

	expect(received).toBe(expected);
});

test("health <= 50 && > 15", () => {
	const character = {
		name: "Maks",
		health: 21,
	}
	const received = returnStatusHealth(character);
	const expected = "wounded";
	
	expect(received).toBe(expected);
})

test("health <= 15 && > 0", () => {
	const character = {
		name: "Maks",
		health: 5,
	}
	const received = returnStatusHealth(character);
	const expected = "critical";
	
	expect(received).toBe(expected);
})

test("health NaN", () => {
	const character = {
		name: "Maks",
		health: "good",
	}	
	const received = returnStatusHealth(character);
	const expected = null;
	
	expect(received).toBe(expected);

})