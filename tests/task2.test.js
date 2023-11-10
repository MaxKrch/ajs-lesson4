import { sortCharacterByHealth } from "../src/js/task2.js";

test('enpty list characters', () => {

	const received = sortCharacterByHealth();
	const expected = "Пустой список игроков"

	expect(received).toBe(expected);
});

test('firs character with health = NaN', () => {
	const list = [
		{name: 'мечник', health: 10},
		{name: 'маг', health: 'bad'},
		{name: 'лучник', health: 80},
	];
	const received = sortCharacterByHealth(list);
	const expected = [
		{name: 'лучник', health: 80},
		{name: 'мечник', health: 10},
		{name: 'маг', health: 'bad'},
	];

	expect(received).toEqual(expected);
});

test('unsorting characters', () => {
	const list = [
		{name: 'мечник', health: 10},
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
	];
	const received = sortCharacterByHealth(list);
	const expected = [
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
		{name: 'мечник', health: 10},
	];

	expect(received).toEqual(expected);
});