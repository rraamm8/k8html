let arr = [1, 2, 3, 4, 5];

console.log('arr : ', arr);
console.log('arr 개수 : ', arr.length);

//배열 요소 접근
console.log('맨처음요소 접근', arr[0])
console.log('맨처음요소 접근', arr[1])

//배열의 전체 요소에 접근 : 배열의 순회
console.log('for')
for (let i=0; i < arr.length; i++){
    console.log(`${i+1}번째 : ${arr[i]}`)
}

console.log('for ... in')
for (let i in arr){
    console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

console.log('for ... of')
for (let item of arr){
    console.log(`${item}`);
}

console.log('for ... of')
for (let item of arr){
    console.log(`${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
}

for (let [i,item] of arr.entries()){
    console.log(`${parseInt(i)+1}번째 : ${item % 2 == 0 ? "짝" : "홀"}`);
}

console.log('forEach')
arr.forEach((item, i)=>{
    console.log(`${parseInt(i)+1}번째 : ${item % 2 == 0 ? "짝" : "홀"}`);
});

//arr = []
//arr.length = 0; //JS만의 특성. 어레이 초기화
//console.log('arr : ', arr);

arr.push(6);
console.log('arr push', arr);
arr.pop();
console.log('arr pop', arr);

arr.unshift(6);
console.log('arr unshift', arr);
arr.shift();
console.log('arr shift', arr);

//splice로 삭제
let arr2 = arr.splice(2, 1)
console.log('arr splice', arr);
console.log('arr splice', arr2);

//splice로 변경
arr.splice(2, 1, 'a');
console.log('arr splice', arr);

//splice로 추가
arr.splice(2,0,3);
console.log('arr splice', arr);

arr = [1,2,3,4,5];
arr2 = arr.map((item)=>{
    let item2 = item *2;
    return item2;
});

console.log('arr map 결과 arr2 :', arr2)

arr2 = arr.map((item)=>{
    let item2 = item *2;
    return item2;
});


arr2 = [];
for(let item of arr){
    if(item %2 ==0) arr2.push(item2);
}
console.log('arr map 결과 arr2 :', arr2);

arr2 = arr.map(item=> item %2 == 0 ? "짝" : "홀");
console.log('arr map 결과 arr2 :', arr2);

arr2 = arr.filter(item=> item %2 == 0);
console.log('arr filter 결과 arr2 :', arr2);

arr = [4,3,5,1,2]
console.log(`${arr} => 정렬 ${arr.sort((a,b)=> b-a)}`)



