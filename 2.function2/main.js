function palindrome(message) {
    // wirte your code here
    let len = message.length;
    let isEven = len % 2 == 0;
    let leftStart = isEven ? len/2 - 1 : Math.floor(len/2)-1;
    let rightStart = isEven ? len/2 : Math.floor(len/2)+1;

    console.log(message, len, leftStart, rightStart);
    for (let l = leftStart, r = rightStart; l >= 0 && r < len; l--, r++) {
        console.log(message[l], message[r]);
        if (message[l] !== message[r]) {
            return false;
        }
    }
    return true;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
