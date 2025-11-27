const palindromes = function (cadena) {
    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

    let cadenaReversa = cadenaLimpia.split('').reverse().join('');

    return cadenaLimpia === cadenaReversa;
};

// Do not edit below this line
module.exports = palindromes;
