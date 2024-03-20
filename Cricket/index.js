let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost : 0,
    tie : 0,
  };

  score.displayScore = function(){
    return `Won : ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;
  };

  showResult();
  
}

// let score = JSON.parse(scoreStr) || {
//   win : 0,
//   lost : 0,
//   tie : 0,
// };

// if (scoreStr !== undefined){
//   score = JSON.parse(scoreStr);
// }
// else{
//   score = {
//     win : 0,
//     lost : 0,
//     tie : 0,
//   };
// }

// score.displayScore = function(){
//   return `Won : ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;
// };


function generateComputerChoice(){
  let randomNumber = Math.random() * 3;

  if (randomNumber>0 && randomNumber<=1){
    return 'Bat';
  }
  else if (randomNumber>1 && randomNumber<=2){
    return 'Ball';
  }
  else {
    return 'Stump';
  }
}

function getResult(userMove, computerMove){
  if (userMove === 'Bat'){
    if (computerMove === 'Ball'){
      score.win ++;
      return 'You won';
    }
    else if (computerMove === 'Stump'){
      score.lost ++;
      return 'Computer won';
    }
    else {
      score.tie ++;
      return 'Tie';
    }
  }
  else if (userMove === 'Ball'){
    if (computerMove === 'Stump'){
      score.win ++;
      return 'You won';
    }
    else if (computerMove === 'Bat'){
      score.lost ++;
      return 'Computer won';
    }
    else {
      score.tie ++;
      return 'Tie';
    }
  }else {
    if (computerMove === 'Bat'){
      score.win ++;
      return 'You won';
    }
    else if (computerMove === 'Ball'){
      score.lost ++;
      return 'Computer won';
    }
    else {
      score.tie ++;
      return 'Tie';
    }
  }
}

function showResult(userMove, computerMove, result){
  // console.log(score);
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#score').innerText = score.displayScore();

  document.querySelector('#user-move').innerText = userMove ? `Your Choice is ${userMove}` : "";
  // `Your choice : ${userMove}`;

  document.querySelector('#computer-move').innerText = computerMove ? `Computer Choice is ${computerMove}` : "";
  // `Computer choice : ${computerMove}`;

  document.querySelector('#result').innerText = result || "";



  // alert(`Your choice : ${userMove} and Computer choice : ${computerMove}

  // ${result}

  // ${score.displayScore()}`);
}