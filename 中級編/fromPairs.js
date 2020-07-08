function fromPairs(pairs){
    const keyValuePairs = {};

    for (let i = 0; i < pairs.length; i++) {
        const [key,value] = pairs[i];
        keyValuePairs[key] = value;
    }

    return keyValuePairs;
}

console.log( fromPairs([['a', 1], ['b', 2]]) );
// => { 'a': 1, 'b': 2 }

// => まずは分割代入で配列の中身をそれぞれ取得する
// => オブジェクト名[key] = value　でkeyとvalueがセットになったオブジェクトが作れる
