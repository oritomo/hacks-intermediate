function union(...arrays) {
    const unionArray = [];

    for (let i = 0; i < arrays.length; i++) {
        const item = arrays[i];
        for (let j = 0; j < item.length; j++) {
            const element = item[j];
            if(!unionArray.includes(element)){
                unionArray.push(element);
            }
        }
    }

    return unionArray;
}

const result = union(
    [10, 1, 2],
    [1, 2, 3],
    [3, 4, 5],
    [5, 10, 15],
    [10, 20, 30]
);
console.log(result);
// [10, 1, 2, 3, 4, 5, 15, 20, 30]

//複数の配列が渡されてその配列の中身のなかで被っていないものを返す
