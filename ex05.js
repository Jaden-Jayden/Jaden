function isEnoughMoney(price, wallet) {
	
    let resultat = price + wallet
    if (resultat %3 == 0){
        return true
    } else {
        return false
    }
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true