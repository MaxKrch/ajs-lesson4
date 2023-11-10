import fetchData from "../src/js/http.js";
import { getLevel } from "../src/js/task3.js";


jest.mock('../src/js/http.js');

beforeEach(() => {
	jest.resetAllMocks();
});

test('Request with correct id', () => {
	fetchData.mockReturnValue({status: 'ok',
		level: 5
})

	const received = getLevel(1);
	const expected = "Ваш текущий уровень: 5"
	expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
	expect(received).toBe(expected);
})

test('Request with uncorrect id', () => {
	fetchData.mockReturnValue({status: 'no'
})

	const received = getLevel('chek');
	const expected = "Информация об уровне временно недоступна"
	expect(fetchData).toHaveBeenCalledWith('https://server/user/chek');
	expect(received).toBe(expected);
})