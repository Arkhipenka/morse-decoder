const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let wordsArr = expr.split('**********');
    let trueMorse = {};
    for(key in MORSE_TABLE) {
        let value = MORSE_TABLE[key];
        let arr = key.split("").map(item => {
            if(item === ".") {
                return "10";
            } else {
                return "11";
            }
        })
        key = arr.join("");
        trueMorse[key] = value;
    }

    let answer = [] 
    wordsArr.forEach((item, i) =>{
        let wordArr = item.split("");
        let word = [];
        while(wordArr.length >= 10) {
            let letter = wordArr.slice(0, 10);
            while(letter[0] === "0") {
                letter.shift();
            }
            letter = letter.join("")
            word = [...word, ...trueMorse[letter]]
            let replace = wordArr.slice(10);
            wordArr = replace;
        }
        if(wordArr.length > 0) {
             while(wordArr[0] === "0") {
                wordArr.shift();
            }
            wordArr = wordArr.join("");
            word = [...word, ...trueMorse[wordArr]]
        }
        if(i === wordsArr.length - 1) {
            answer = [...answer, ...word];
        } else {
            answer = [...answer, ...word, ' '];
        }
        

    })
    answer = answer.join("");
    return answer;
}

module.exports = {
    decode
}