  //Open API 데이터 가져오기
const getData = (selDt, ul, gubun) => {
    console.log(selDt);

    const testAPI = '82ca741a2844c5c180a208137bb92bd7';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${testAPI}&targetDt=${selDt}`
    if(gubun != 'T'){
      url = `${url}&repNationCd=${gubun}`;
    }

    console.log(url);

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(dailyBoxOfficeList);

        let tm = dailyBoxOfficeList.map(item => 
          `<li class='mvli'>
              <span class = 'rank'>${item.rank}</span>
              <span class = 'movieNm'>${item.movieNm}</span>
              <span class='audiAcc'>${item.audiAcc}</span>
              <span class='openDt'>${item.openDt}</span>
              <span class='rankInten'>${item.rankInten}</span>
              <span>${item.rankInten > 0 ? 
                '<span class="spRed">▲</span>' 
                : item.rankInten < 0 ? 
                '<span class="spBlue">▼</span>'
                : '-'}</span>
              ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
          </li>`)
        
        tm = tm.join('')
        ul.innerHTML = tm;
        console.log(tm)

      })
      .catch(err => console.error(err));

}

//어제 날짜 구하기 함수
const getYesterday = () =>{
  const yesterday  = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  console.log('yesterday :', yesterday);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  //월 두자리
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  //month = `0${month}`.slice(-2);
  //console.log("month =", month);

  //month = `0${month}`.padStart(2,0);
  //console.log("month =", month);

  //day = `0${day}`.padStart(2,0);
  //console.log("day =", day);

  return `${year}-${month}-${day}`;
}

//radio 값 가져오기
//const r1 = document.querySelector('#r1');
//const r2 = document.querySelector('#r2');
//const r3 = document.querySelector('#r3');

const getGubun = () => {

  // radio버튼의 클릭된 것만 가져오기
  const gubun = document.querySelector('input[name=mvGubun]:checked') ;  
  console.log('gubun = ', gubun.value) ;
  return gubun.value ;
}

//DOM 생성 후
document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  const radios = document.querySelectorAll('input[name=mvGubun]') ;

  //어제 날짜 구하기
  let yesterday = getYesterday();
  console.log('yesterday :', yesterday);

  //date 요소 최대값 설정
  dt.max = yesterday;

  //디폴트로 어제 날짜 설정, 기본 첫 페이지 보이기
  dt.value = yesterday;
  getData(dt.value.replaceAll('-',''), ul, getGubun());

  //데이터 가져오기
  dt.addEventListener('change', ()=>{
    getData(dt.value.replaceAll('-',''), ul, getGubun());
  });

  sel1.addEventListener('change', ()=>{
    getData(dt.value.replaceAll('-',''), ul, getGubun());
  });

// fieldset.addEventListener('click', ()=>{
// getData(dt.value.replaceAll('-', ''), ul, getGubun());
// });

  for(let radio of radios){
    radio.addEventListener('click', ()=>{
      if(radio.checked) getData(dt.value.replaceAll('-', ''), ul, radio.value);
    })
  }

});