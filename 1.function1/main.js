function reverseString(message) {
    // wirte your code here
    let result = '';
    for(let i = message.length-1; i >= 0; i--) {
        result += message[i];
    }
    return result;
}
reverseString('hello'); // should return 'olleh'
