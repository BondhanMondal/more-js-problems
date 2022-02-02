const greetings = 'Hello, how are you?';

function reverseString (text){
    let reversed = '';
    for (const letter of text){
        //console.log(letter);
        reversed = letter + reversed;
    }
    return reversed;
}

const reverse = reverseString(greetings);
console.log(reverse);