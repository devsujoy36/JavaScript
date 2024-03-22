const song = 'Ami tomar didhay bachi, tomar didhay more jai';
const lowerCase = song.toLowerCase();
const doesExist = lowerCase.includes('ami');
const textIndex = lowerCase.indexOf('tomar');
console.log(doesExist);
console.log(textIndex);