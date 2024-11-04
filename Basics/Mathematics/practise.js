// palindrome check
/**
 * base condition:
 * start < end
 * 
 * 
 */

function palindrome (str, start, end) {
    if(start >= end) {
        return true
    }

    if(str[start] !== str[end]) return false;
    palindrome(str, start + 1, end - 1);
}

let word = "abbcbba";


// const res = palindrome(word, 0, word.length - 1);
console.log(palindrome(word, 0, word.length - 1));