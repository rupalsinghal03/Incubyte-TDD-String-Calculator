function add(numbers) {
    if (!numbers) return 0;

    const num = parseInt(numbers, 10);
    return isNaN(num) ? 0 : num;
}

// console.log(add(""));
console.log(add("1"));