let obj = {
  apple: '🍎',
  carrot: '🥕', 
  banana: '🍌', 
};

//object 접근
console.log(obj['apple']);
console.log(obj.apple);

//object 순회
for(let k in obj){
  console.log(`${k}=> ${obj[k]}`);
}