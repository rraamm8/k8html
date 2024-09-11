document.addEventListener('DOMContentLoaded', ()=>{

    const txt1 = document.querySelectorAll('#txt1');
    const secBt1 = document.querySelectorAll('.secBt1');
    

    for(let bt of secBt1){
        bt.addEventListener('click', (e)=>{
            e.preventDefault();

            let addItem = bt.innerHTML.replace('추가', '');
            txt1.value = txt1.value + addItem;
            console.log(bt.innerHTML);
        });
    }

    const secBt2 = document.querySelectorAll('.secBt2');

    for(let bt of secBt2){
        bt.addEventListener('click', ()=>{
            let addItem = bt.innerHTML.replace('삭제', '');
            //let tmArr = Array.from(txt1.value); //
            //let tmArr = txt1.value.split(''); //유니코드로 분리
            
            for(let i = 0; i < tmArr.length; i++){
                if (tmArr[i] == addItem) tmArr[i] = '';

            }

            tmArr = tmArr.join('');
            console.log(tmArr);

        });
    }

    //변경
    for(let bt of secBt3){
        bt.addEventListener('click', (e)=>{
            e.preventDefault();

            let items = bt.innerHTML.split('→');
            console.log('items = ', items);

            let tmArr = Array.from(txt1.value);
            tmArr = tmArr.map(item => item ==items[0] ? items[1] : item);
            txt1.value = tmArr.join('');
        });
    }

    const secBt42 = document.querySelectorAll('.secBt2');
    secBt42.addEventListener('click', (e)=>{
        e.preventDefault();

        let obj2 = JSON.parse(jsonDt);

        console.log('obj2 = ', obj2);
        console.log('obj2 = ', obj2['apple']);


    });

});