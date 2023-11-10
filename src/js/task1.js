export const returnStatusHealth = (character = {}) => {
	let status;
	const health = character.health;
	
	if(character.health === undefined) {
		return "Не передан персонаж";		
	}


	if(health > 50 && health <= 100) {
		status = "healthy";
	} else if (health > 15) {
		status = "wounded";
	} else if (health > 0){
		status = "critical";
	} else {
		status = null;
	}

	return status;
}
