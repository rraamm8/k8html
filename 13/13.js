let arr = [0,0,0,0,0,0,0,0,1]  ;
let isShuffle = false ;
let cnt = 0 ;

const init = (bt) => {
  bt.innerHTML = '폭탄을 섞어 주세요.' ;
  isShuffle = false ;
  cnt = 0; 
}


document.addEventListener('DOMContentLoaded', ()=>{
  const cols = document.querySelectorAll('.col') ;
  const bt = document.querySelector('button') ;
  const msg = document.querySelector('#msg') ;

  //버튼 처리
  bt.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isShuffle) {
      isShuffle = true ;

      //배열 섞기
      arr.sort(() => Math.random() - 0.5);
      console.log(arr)
      bt.innerHTML = '게임중 ...'

      msg.innerHTML = '';
      for(let [idx,col] of cols.entries()) {
        col.innerHTML = idx + 1 ;
      }
    }
  });

  //div 박스처리
  // for(let col of cols) {
  for(let [idx, col] of cols.entries()) {
    col.addEventListener('click', ()=>{
      //폭탄이 섞이지 않으면 클릭 안됨
      if (!isShuffle) {
        msg.style.color = 'black' ;
        msg.innerHTML = '<h2>폭탄을 섞어주세요.</h2>' ;
        return ;
      }

      //이미지가 있는지 확인 
      if (col.innerHTML.includes('img')) return;

      //실패인경우 더이상 눌러지지 않게
      if (msg.innerHTML.includes('실패')) return ;

      // let idx = col.getAttribute('id').slice(-1) - 1 ;
      console.log(idx, arr[idx]);

      if (arr[idx] == 0) {
        //하트
        col.innerHTML = '<img src="../img/hart.png">';
        //하트 개수
        cnt = cnt + 1 ;

        //하트가 8개가 되면 
        if (cnt == 8) {
          msg.style.color = 'blue' ;
          msg.innerHTML = '<h2>성공!!</h2>';

          //전체 하트
          let i = arr.indexOf(1);
          document.querySelector(`#box${i+1}`).innerHTML = '<img src="../img/hart.png">';
          init(bt) ;
        }
      }
      else {
        //폭탄
        col.innerHTML = '<img src="../img/boom.png">';
        msg.style.color = 'red' ;
        msg.innerHTML = '<h2>실패!!</h2>';
        init(bt);
      }

    });
  }
  

});