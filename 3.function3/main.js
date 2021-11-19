function alphabetSort(message) {
    const msgUpper = message.toUpperCase();

    let charArr = [];
    for (let i = 0; i < message.length; i++) {
        const charCode = msgUpper.charCodeAt(i)-64;
        const IsUpper = (message.charCodeAt(i)-64) < 26
        if (!charArr[charCode]) {
            charArr[charCode] = IsUpper ? {up: 1, low: 0} : {up: 0, low: 1};
        } else if (IsUpper) {
            charArr[charCode].up++;
        } else charArr[charCode].low++;            
    }

    let result = '';
    charArr.forEach((ele, index) => {
        for (let u = 1; u <= ele.up; u++) {
            result += String.fromCharCode(index+64);
        }
        for(let l = 1; l <= ele.low; l++) {
            result += String.fromCharCode(index+64+32);
        }
    })
    // console.log(result);
    return result;
}

alphabetSort('Aahellooog'); // should return 'ehllo'
