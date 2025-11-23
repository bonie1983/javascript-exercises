const removeFromArray = function(lista, ...args) {
    const nuevoArray = []; 

    for (const item of lista) {
        if (!args.includes(item)) {
            nuevoArray.push(item);
        }
    }
    
    return nuevoArray;
};

// Do not edit below this line
module.exports = removeFromArray;
