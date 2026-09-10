function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax rate
    return amount * taxRate;
}

let calculateTaxResult = calculateTax(100);
console.log(calculateTaxResult); // Output: 10


function convertToUpperCase(text) {
    return text.toUpperCase();
}

let convertToUpperCaseResult = convertToUpperCase("hello");
console.log(convertToUpperCaseResult); // Output: "HELLO"


function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

let findMaximumResult = findMaximum(5, 10);
console.log(findMaximumResult); // Output: 10


function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

let isPalindromeResult = isPalindrome("racecar");
console.log(isPalindromeResult); // Output: true


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

let calculateDiscountedPriceResult = calculateDiscountedPrice(100, 20);
console.log(calculateDiscountedPriceResult); // Output: 80



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };