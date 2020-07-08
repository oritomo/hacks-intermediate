function pullAt(array, ...indexes) {
    // array: ['a', 'b', 'c', 'd']
    // indexes
    //   - 配列パターン      : [ [1, 3] ]
    //   - 2, 3, 4, ...引数 : [1, 3]

    //配列パターンでも引数パターンでも対応できるようにしている
    const _indexes = Array.isArray(indexes[0]) ? indexes[0] : indexes;
    const pulledArray = [];

    for (let i = 0; i < _indexes.length; i++) {
        const targetIndex = _indexes[i];
        const targetValueInArray = array[targetIndex];
        pulledArray.push(targetValueInArray);
    }

    for (let i = array.length - 1; 0 <= i; i--) {
        const current = array[i];
        if (pulledArray.includes(current)) {
            array.splice(i, 1);
        }
    }
    return pulledArray;
}

const array = ['a', 'b', 'c', 'd'];
const pulled = pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']

//第二引数以降で指定した番号の配列を削除して新たな配列を生成