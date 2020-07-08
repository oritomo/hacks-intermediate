function intersection(...arrays){
    const newArray = [];

    //[2, 1]
    const headArray = arrays.shift()

    for (let i = 0; i < headArray.length; i++) {
        const current = headArray[i];
        if (arrays.every((array)=>array.includes(current))){
            newArray.push(current);
        }
    }

    return newArray;
}

console.log( intersection([2, 1], [2, 3], [2, 4]) );

//どのようにループが回っているのか深く考える必要がある
//一つ目の配列と共通の配列を検索