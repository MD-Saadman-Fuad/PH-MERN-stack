function add(a, b){
    console.log(a, b);
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}

add(1, 2, 3, 5, 6, 7, 8, 9); // 1 2