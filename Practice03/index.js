
let noOfTimeClicked = localStorage.getItem('noOfTimeClicked') || 0;

function btnPress(){
  console.log('pressed');
  
  noOfTimeClicked++;
  localStorage.setItem('noOfTimeClicked', noOfTimeClicked);
  btnUpdate();

  
}


function btnUpdate(){
  let btn = document.querySelector('#btn');
  if (noOfTimeClicked % 2 === 0){
    btn.classList.remove('js-odd');
    btn.classList.add('js-even');
  }
  else {
    btn.classList.remove('js-even');
    btn.classList.add('js-odd');
  }

  btn.innerText = noOfTimeClicked;
}

btnUpdate();



function doGreeting(personName = 'Dear'){
  let date = new Date();
  let hours = date.getHours();
  
  let heading = document.querySelector('#greet');
  
  if (hours>5 && hours<12){
    heading.innerText = `Good Morning ${personName}`;
  }
  else if (hours>12 && hours<18){
    heading.innerText = `Good Night ${personName}`;
  }
  else{
    heading.innerText = `Good Afternoon ${personName}`;
  }
}

doGreeting('Rohit');