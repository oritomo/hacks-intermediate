function chunk(array,size = 1){
    if(size < 1){
        throw new Error('第二引数は１以上でよろしく')
    }
    const chunkedArray = [];

    const copiedArray = [...array];

    while(copiedArray.length > 0){
        const splicedArray = copiedArray.splice(0, size)
        chunkedArray.push(splicedArray);
    }
    return chunkedArray;
}

const charList = ['a', 'b', 'c', 'd'];

console.log( chunk(charList, 2) ) ;
// => [['a', 'b'], ['c', 'd']]

console.log( chunk(charList, 3) );
// => [['a', 'b', 'c'], ['d']]

console.log( chunk(charList, 0) );
// => Uncaught Error: 第二引数は１以上でよろしく
//これは無限ループを防ぐためのエラー処理

//第一引数の配列を第二引数の値で配列を区切り、新たな配列を生成
