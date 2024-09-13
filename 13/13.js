let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let isShuffle = false;
let isGameOver = false;
let cnt = 0;

document.addEventListener('DOMContentLoaded',() => {
  const cols = document.querySelectorAll('.col');
  const bt = document.querySelector('button');
  const msg = document.querySelector('#msg');

  bt.addEventListener('click', (e) => {
    e.preventDefault();
    if(!isShuffle){
      isShuffle = true;
      
      // 배열섞기
      arr.sort(() => Math.random() - 0.5);
      console.log(arr);
      bt.innerHTML = '게임 중...';
      msg.innerHTML = '폭탄을 피해 클릭하세요!';
    }
  });

  //div 박스처리
  for(let col of cols){
    col.addEventListener('click', () => {
      if(col.innerHTML.includes('img')) return;

      let idx = col.getAttribute('id').slice(-1) -1;
      console.log(idx, arr[idx]);

      if(arr[idx]==0){
        col.innerHTML = '<img src="../img/hart.png">';
      } else{
        col.innerHTML = '<img src="../img/boom.png">';
        msg.innerHTML = '<h2>실패!!</h2>'
      }
  });
}
});