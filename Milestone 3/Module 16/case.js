const school = 'Rajuk Uttara Model School';
console.log(school.toLowerCase())
console.log(school.toUpperCase())
const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase()===book.toLowerCase()){
    console.log('Reading book');
}
else{
    console.log('Not Reading')
}

const drink = 'water';
const liquid = '    water'

if (drink.trim()===liquid.trim()){
    console.log('Same Same');
}else{
    console.log('But different');
}