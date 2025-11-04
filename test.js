function greetings(firstname) {
	let greetings = "Bienvenue, " + firstname + " !";

	return greetings;
}

console.log(greetings("")); // Résultat attendu: "Bienvenue, !"
console.log(greetings("Ben")); // Résultat attendu: "Bienvenue, Ben !"
