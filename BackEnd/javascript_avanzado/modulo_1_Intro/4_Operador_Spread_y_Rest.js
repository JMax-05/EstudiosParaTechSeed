const natural = [1,2,3,4,5,6,7,8,9]

const numbers = [-1,-2,-3,-4,-5,-6,0,...natural]

console.log(numbers)

const debate_presidencial = {
    candidatos: {
        Fuerza_y_libertad: "Fiorella Molinelli",
        Somos_peru: "Forsyth",
        si_creo: "Carlos Espa"
    },
    presentadores: [
        "Periodista 1", "Periodista 2"
    ]
}

const debate_presidencial_2 = {
    canales_transmision :{
        4: "Canal N",
        2: "Frecuencia Latina"
    },
    ...debate_presidencial
}

console.log(debate_presidencial_2)