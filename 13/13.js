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
      if(col.innerHTM){
  });

  // 각 셀 클릭 이벤트
  cols.forEach((col, index) => {
    col.addEventListener('click', () => {
      if (!isShuffle || isGameOver) return;

      if (arr[index] === 1) {
        col.style.backgroundColor = 'red';  // 폭탄인 경우 빨간색으로 표시
        msg.innerHTML = '폭탄을 찾았습니다! 게임 오버!';
        bt.innerHTML = '게임 다시 시작';
        isGameOver = true;
      } else {
        col.style.backgroundColor = 'green';  // 폭탄이 아닌 경우 초록색으로 표시
        cnt++;
        if (cnt === 8) {
          msg.innerHTML = '축하합니다! 폭탄을 피했습니다!';
          bt.innerHTML = '게임 다시 시작';
          isGameOver = true;
        }
      }
    });
  });

  // 게임 다시 시작
  bt.addEventListener('click', () => {
    if (isGameOver) {
      // 초기화
      arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
      isShuffle = false;
      isGameOver = false;
      cnt = 0;
      cols.forEach(col => col.style.backgroundColor = '#ccc');
      msg.innerHTML = '';
      bt.innerHTML = '게임 시작';
    }
  });
});