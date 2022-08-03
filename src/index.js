const messages = [
    "Pedro",
    "Pablo",
    "Ana",
    "Isabel",
    "Juliana",
    "Pilar",
    "Jeronimo",
    "Mariana",
    "Maria",
]

const randomMsg  = ()=>{
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }