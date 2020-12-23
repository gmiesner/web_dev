let square = document.querySelectorAll('td');
let button = document.querySelector('b');

for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', changeMarker);
}

function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

b.addEventListener('click', function(){
  for (var i = 0; i < square.length; i++) {
      square[i].addEventListener('click', changeMarker);
  square[i].textContent = ""
}
})
