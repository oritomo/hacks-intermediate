function takeRightWhile(array,predicate){
    const takenRightValues = [];
    for (let i = array.length - 1; 0 <= i; i--) {
        const value = array[i];
        if(predicate(value)){
            break;
        }
        //takenRightValues.push(value)  これだとpebbles,fredの順になる
        takenRightValues.unshift(value)　　//こっちだとfred,pebblesの順になる
    }
    return takenRightValues;
}

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

const result = takeRightWhile(users, function (o) {
    return o.active;
});

console.log(result);
// => objects for ['fred', 'pebbles']

console.log(users);
// => objects for ['barney', 'fred', 'pebbles']

//末尾から検索する関数
