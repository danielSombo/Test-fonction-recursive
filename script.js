/**PRISE DE DÉCISION (if-else et switch)*/

/**1. Leap Year Checker */
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


/**2. Ticket Pricing */
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}



/**RECURSION */

/**1. Séquence de Fibonacci */
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

/**2. Vérificateur de Palindrome */
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }
    
    return checkPalindrome(str, 0, str.length - 1);
}
