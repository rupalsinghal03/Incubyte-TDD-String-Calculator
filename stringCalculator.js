function add(numbers) {
    if (!numbers) return 0;

    // const num = parseInt(numbers, 10);
    // return isNaN(num) ? 0 : num;

    const nums = numbers.split(",").map(Number);
    return nums.reduce((sum, n) => sum + n, 0);

}

// console.log(add(""));
// console.log(add("1"));
console.log(add("1,5"));