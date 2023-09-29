const title = document.getElementById('title');
const input = document.getElementById('input-text');

input.addEventListener('keyup', updateTitle);
input.addEventListener('keydown', updateTitle);

function updateTitle(e) {
  if (e.keyCode===32) {

    input.value= input.value.slice(0, -1);
    title.innerHTML=input.value.slice(0, -1)
  } else if (e.keyCode === 8) {
    
    input.value +=" ";
  } else{
    title.innerHTML=input.value;
  }
}