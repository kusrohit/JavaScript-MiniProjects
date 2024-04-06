const body = document.body
const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')

const str = "0123456789abcdef"


let intervalId;
startbtn.addEventListener('click',()=>{
    clearInterval(intervalId)

    intervalId = setInterval(()=>{
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const value = str[Math.floor(Math.random()*16)];
            color = color + value
        }
        // console.log(color);
        body.style.backgroundColor = color
    },1)
})


stopbtn.addEventListener('click', ()=> clearInterval(intervalId))