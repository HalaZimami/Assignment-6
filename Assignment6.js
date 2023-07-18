// 1] Write a JavaScript Function to Reverse a String.
function reverese(string) {
    let reverseString = '';
    for (i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    return reverseString;
}
console.log(reverese("Hi This is Hala"));

// 2] Write a JavaScript Function to check whether a String is Palindrome or not.
function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i].toLowerCase() !== string[len - 1 - i].toLowerCase()) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

console.log(checkPalindrome("Halah"))

// 3] Write a JavaScript Function to calculate the number of Vowels & Consonants in a String.
const vowels = ["a", "e", "i", "o", "u"]

function calcVowelsConsonants(string) {
    let vowelsCounter = 0
    let consonantsCounter = 0
    for (let char of string.toLowerCase()) {
        if (vowels.includes(char))
            vowelsCounter++;
        else
            consonantsCounter++
    }
    return `Vowels Number is: ${vowelsCounter} \n Consonants Number is: ${consonantsCounter}`
}

console.log(calcVowelsConsonants("Hala"))

// 4] Write a JavaScript Function to find the common Elements in an Array.

// 5] Write a JavaScript Function to check if a String is an Anagram of another String or not.
function checkAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    var str1New = str1.split('').sort().join('');
    var str2New = str2.split('').sort().join('');

    var result = (str1New === str2New);
    return result;
}

// Checking the output
console.log(checkAnagram('abc', 'cba'));