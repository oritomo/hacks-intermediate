function pull(array, ...values){
    for (let i = array.length - 1; 0 <= i; i--) {
        const element = array[i];
        if(values.includes(element)){
            array.splice(i, 1);
        }
    }
    return array;
}

const array = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

//配列を後ろからチェックしていき引数が二つ目以降のものを含んでいたら配列から削除する