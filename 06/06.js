document.addEventListener('DOMContentLoaded', () => {
    const comImg = document.querySelector('#com > img');
    const userImg = document.querySelector('#user > img');
    const bts = document.querySelectorAll('button');
    const msg = document.querySelector('#msg');

    console.log(msg);

    for (let bt of bts) {
        console.log(bt);
        bt.addEventListener('click', () => {
            let comN = Math.floor(Math.random() * 6) + 1;
            comImg.setAttribute('src', `../img/${comN}.png`);
            comImg.setAttribute('alt', `${comN}.png`);

            console.log(bt.textContent.charAt(0));
            
            let userN = parseInt(bt.textContent.charAt(0));
            userImg.setAttribute('src', `../img/${userN}.png`);
            userImg.setAttribute('alt', `${userN}.png`);

        if (comN === userN) {
            msg.textContent = '맞음';
        }
        else {
            msg.textContent = '틀림';
        }
        });

    }
    
});