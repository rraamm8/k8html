document.addEventListener('DOMContentLoaded', ()=>{
    //요소 가져오기
    const img = document.querySelector('.row>img');
    const txt1 = document.querySelector('#txt1');
    const bt1 = document.querySelector('#bt1');

    //랜덤수
    let n;
    //let flag = false;

    bt1.addEventListener('click', (e)=>{
        e.preventDefault();
        n = Math.floor(Math.random()*100) + 1; //1 ~ 100까지

        if(n === parseInt(txt1.value)) {
            img.setAttribute('src', '../img/good.png');
        }
        else if (n > parseInt(txt1.value)){
            img.setAttribute('src', '../img/up.png')
        }
        else {
            img.setAttribute('src', '../img/down.png')
        }

    });
});