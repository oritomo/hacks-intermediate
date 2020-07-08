// function reverse (array){
//     const reverseArray = [];
//     for (let i = array.length - 1; 0 <= i; i--) {
//         const element = array[i];
//         reverseArray.push(element);
//     }
//     return reverseArray;
// }

const array = [1, 2, 3];

console.log( reverse(array) );
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]

const array2 =  [1, 2, 3, 4, 5, 6];
console.log(reverse(array2));
// => [6, 5, 4, 3, 2, 1]


//分割代入バージョン
function reverse(array){
    //入れ替えを行うときに使うループの回し方
    //この発想を覚えておきたい
    const maxIndexForLoop = Math.floor(array.length / 2);
    for (let i = 0; i < maxIndexForLoop; i++) {
        const oppositeIndex = array.length - (1 + i);
        [array[i], array[oppositeIndex]] = [array[oppositeIndex], array[i]];
    }
    return array;
}
