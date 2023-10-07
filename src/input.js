class addressHero {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
    atacar() {
        console.log(`O ${this.classe} ${this.nome} atacou usando ${tipo}`)
    }
}
let tipo = ""
const heroData = new addressHero("Enzo", "20", "guerreiro")

if(heroData.classe.toLowerCase() === "mago") {
    tipo = "Magia"
    heroData.atacar()

} else if(heroData.classe.toLowerCase() === "guerreiro") {
    tipo = "Espada"
    heroData.atacar()

} else if(heroData.classe.toLowerCase() === "monge") {
    tipo = "Artes Marciais"
    heroData.atacar()

} else if(heroData.classe.toLowerCase() === "ninja") {
    tipo = "Shuriken"
    heroData.atacar()

}