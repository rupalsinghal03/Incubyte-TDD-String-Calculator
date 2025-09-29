function add(numbers) {
    if (!numbers) return 0;

    // const num = parseInt(numbers, 10);
    // return isNaN(num) ? 0 : num;

    // const nums = numbers.split(",").map(Number);
    // return nums.reduce((sum, n) => sum + n, 0);

    // const nums = numbers.split(/,|\n/).map(Number);
    // return nums.reduce((sum, n) => sum + n, 0);

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterLine = parts[0];
        numbers = parts.slice(1).join("\n");

        const customDelimiter = delimiterLine.slice(2).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        delimiter = new RegExp(customDelimiter);
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed " + negatives.join(","));
    }
    return nums.reduce((sum, n) => sum + n, 0);

}

// console.log(add(""));
// console.log(add("1"));
// console.log(add("1,5,3"));
// console.log(add("1\n2,3"));
console.log(add("//;\n1;2")); 
