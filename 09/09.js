//문자열 연습
let s = 'Hello JS!!';

console.log('문자열 : ', s);
console.log('문자열길이 : ', s.length);
console.log('문자열문자변화 : ', s.toUpperCase());


console.log('숫자확인 : ', isNaN);
console.log('첫번째글자 : ', s.charAt(0));
console.log('첫번째글자 : ', s[0]);
console.log('맨마지막글자 : ', s[s.length - 1]);
console.log('맨마지막글자 : ', s.charAt(s.length - 1));
console.log('맨마지막글자 : ', s.slice(-1));
console.log('문자열분리 : ', s.split(''));

for(let c of s){
    console.log(c);
}

for(let i in s){
    console.log(i, s[i]);
}


//문자열 확인
console.log('h문자열 확인 : ', s.includes('JS'));