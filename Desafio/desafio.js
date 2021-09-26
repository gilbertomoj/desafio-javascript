var jogo = ' tesoura corta papel\n papel cobre veneno\n pedra esmaga lagarto\n lagarto corta Spock\n Spock vaporiza tesoura\n tesoura decapita Spock\n lagarto come papel\n veneno refuta lagarto\n Spock vaporiza pedra\n veneno esmaga tesoura'

// a) Onde tem esmaga trocar por quebra.

console.log('-------------------------')
jogo = jogo.replace("esmaga", "pedra")
console.log(jogo)
// b)Onde tem lagarto trocar por tesoura.

console.log('-------------------------')
jogo = jogo.replace("lagarto", "tesoura")
console.log(jogo)

// c) Onde tem Spock trocar por papel.

console.log('-------------------------')
jogo = jogo.replace("Spock", "papel")
console.log(jogo)

// d)Onde tem vaporiza trocar por embrulha.

console.log('-------------------------')
jogo = jogo.replace("vaporiza", "embrulha")
console.log(jogo)
// e)Onde tem cobre trocar por embrulha.

console.log('-------------------------')
jogo = jogo.replace("cobre", "embrulha")
console.log(jogo)
// f) Onde tem decapita trocar por corta.

console.log('-------------------------')
jogo = jogo.replace("decapita", "corta")
console.log(jogo)
// g) Onde tem come trocar por corta.

console.log('-------------------------')
jogo = jogo.replace("come", "corta")
console.log(jogo)
// h) Onde tem veneno trocar por pedra.

console.log('-------------------------')
jogo = jogo.replace("veneno", "pedra")
console.log(jogo)
// i) Onde tem refuta trocar por quebra.

console.log('-------------------------')
jogo = jogo.replace("refuta", "quebra")
console.log(jogo)