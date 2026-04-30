let count = 0;

const displayCount = document.getElementById('counter');
const numberAdded = document.getElementById('addBtn');
const numberSubtracted = document.getElementById('subBtn');
const clearCount = document.getElementById('clearBtn');

function clearNumber(){
  count = 0;
  displayCount.textContent = count;
}
function subtractNumber(){
  if (count <= 0){
    count = 0;
    displayCount.textContent = count;
  }
  else{
    count--;
    displayCount.textContent = count;
  }
}

function addNumber(){
  count++;
  displayCount.textContent = count;
}
clearCount.addEventListener('click', clearNumber);
numberSubtracted.addEventListener('click', subtractNumber);
numberAdded.addEventListener('click', addNumber);