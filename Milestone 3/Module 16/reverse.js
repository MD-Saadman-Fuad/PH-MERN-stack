const sentence = " I go to school";
console.log(sentence);

let reverse = '';


for (const letter of sentence){
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse)
reverse1 = '';
for (let i = sentence.length; i<0; i--){
    reverse1 = reverse1 + sentence[i];
}

console.log(reverse)

const reversed = sentence.split('').reverse().join('');
console.log(reversed)