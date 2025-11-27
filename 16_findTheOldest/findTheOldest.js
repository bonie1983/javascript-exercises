const findTheOldest = function(persons) { 
    
    const obtenerEdad = (person) => {
        const añoDeReferencia = person.yearOfDeath || new Date().getFullYear(); 
        
        return añoDeReferencia - person.yearOfBirth;
    };
    
    return persons.reduce((personaMasViejaHastaAhora, personaActual) => {
        
        const edadMasVieja = obtenerEdad(personaMasViejaHastaAhora);
        const edadActual = obtenerEdad(personaActual);

        if (edadActual > edadMasVieja) {
            return personaActual;
        } else {
            return personaMasViejaHastaAhora;
        }
    }, persons[0]);
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
// Do not edit below this line
module.exports = findTheOldest;
