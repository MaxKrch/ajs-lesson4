const sortCharacterByHealth = (list = []) => {
	if(list.length === 0) {
		return "Пустой список игроков";
	}

	list.sort((a, b) => {
		if(!Number(a.health)) {
			return 1;
		} else if(!Number(b.health)) {
			return -1;
		} else {
			return b.health - a.health;
		}
	})

	return list;
}

export { sortCharacterByHealth };