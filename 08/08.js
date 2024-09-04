document.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector('img');
    const bt = document.querySelector('button');

    let n;
    let flag = false;

    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        if(numInput.value ==''){

        }

        if(numInput.value <1 || numInput.value >100) {

        }

        if(!flag) {

        }

        msg.innerHTML = "";
        if(n === parseInt(numInput.value)){
        }
        else if (n > numInput.value){
            upDownImg.setAttribute('src', "./img/up.png");
        }
        else {
            upDownImg.setAttribute('src', "./img/down.png");
        }

    });
});