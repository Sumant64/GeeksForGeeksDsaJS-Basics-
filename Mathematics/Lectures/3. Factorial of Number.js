// Find the factorial of number
/**
 * I/P: n = 4
 * O/P: 24
 * 
 * I/P: n = 6
 * O/P: 720
 * 
 * I/P: n = 0
 * O/P: 1
 * 
 * We will do it in two ways:
 * 1. Iterative
 * 2. recursive
 */

// Iterative solution
function fact(n) {
    let res = 1;
    for(let i = 2; i <= n; i++) {
        res = res * i;
    }
    return res;
}

console.log(fact(5))

//====================================
// Recursive solution
/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function factRec(n) {
    if(n === 0) {
        return 1;
    }
    return n * factRec(n - 1);
}

console.log(factRec(5))