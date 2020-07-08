function concat(array, ...values){
    const copiedArray = [...array];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if(Array.isArray(value)){
            copiedArray.push(...value);
        }else{
            copiedArray.push(value);
        }
    }
    return copiedArray;
}

const array = [1];
const other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

//配列を一段階取り外したい時　→　スプレッド演算子使う！！！覚えとけ！！！！！！