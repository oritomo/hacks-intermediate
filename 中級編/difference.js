function difference(array,values){
    const diffValues = []
    if(!Array.isArray(values)){
        return [...array];
    }
    for (let i = 0; i < array.length; i++) {
        const target = array[i];
        if(!values.includes(target)){
            diffValues.push(target);
        }
    }
    return diffValues;
}

console.log( difference([2, 1], [2, 3]) );
// => [1]

console.log( difference([2, 1]) );
// => [2, 1]

//arrayとvaluesを比べて一致していないものを返す関数
