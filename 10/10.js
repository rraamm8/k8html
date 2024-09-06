document.addEventListener('DOMContentLoaded', ()=>{
    //요소가져오기
    const divNum = document.querySelector('#divNum') ;
  const divplus = document.querySelector('.divplus') ;
  const divBonus = document.querySelector('#divBonus') ;
  const bt = document.querySelector('.sec > button') ;

  //요소 숨기기
  divNum.style.display = 'none';
  divplus.style.display = 'none';
  divBonus.style.display = 'none';

  //버튼 클릭
  bt.addEventListener('click', (e)=>{
    e.preventDefault();

    let arr = [] ;
    while( arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1 ; //1~45
      if ( !arr.includes(n) ) arr.push(n) ;
    }

    const lottoNumbers = arr.slice(0, 6).sort((a, b) => a - b);
        const bonusNumber = arr[6];

        console.log('Lotto numbers:', lottoNumbers, 'Bonus number:', bonusNumber);

        // 로또 번호와 보너스 번호를 화면에 표시
        divNum.querySelectorAll('span').forEach((span, i) => span.textContent = lottoNumbers[i]);
        divBonus.querySelector('span').textContent = bonusNumber;

        // 요소 보이기
        divNum.style.display = 'block';
        divplus.style.display = 'block';
        divBonus.style.display = 'block';

    });
});