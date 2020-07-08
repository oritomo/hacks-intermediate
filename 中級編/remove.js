function remove(array, predicate) {
    const removedValues = [];
    for (let i = array.length; 0 < i; i--) {
        const element = array[i];

        //if文を通った数字のみremovedValuesに打ち込まれる
        if(predicate(element)){
            array.splice(i, 1)
            console.log(array);
            removedValues.push(element);
        }
    }
    return removedValues;
}

const array = [1, 2, 3, 4];
const evens = remove(array, function (n) {
    return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]

//けつから検査していき、偶数なら除去し新たな配列を生成