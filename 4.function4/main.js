function countWords(message){
    const wordArr = message.split(" ");
    // console.log(wordArr.length);
    return wordArr.length;
}

countWords('Good morning, I love JavaScript.'); // should return 5