function dropRightWhile(array, predicate) {
    const droppedArray = [...array];

    for (let i = array.length - 1; 0 <= i; i--) {
        const value = array[i];
        //trueだったら
        if (!predicate(value)) {
            break;
        }
        droppedArray.pop();
    }
    return droppedArray;
}

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

const result = dropRightWhile(users, function (o) {
    return !o.active;
});

console.log('result: ', result);
// => objects for ['barney']

console.log('users: ', users);
// => objects for ['barney', 'fred', 'pebbles']

// => 配列の先頭を削除


