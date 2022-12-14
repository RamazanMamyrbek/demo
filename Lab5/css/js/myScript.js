let arr = ['Eagle', 'Mercedes', 'BMW', 'Banana', 'Worm', 'Apple', 'Toyota', 'Tesla'];
let animals = ['Eagle', 'Worm'];
let cars = ['Mercedes', 'BMW','Toyota', 'Tesla'];
let fruits = ['Banana', 'Apple'];
var squares = document.getElementsByClassName('square');

for(var i = 0; i < squares.length; i++) {
    document.getElementsByClassName('square')[i].innerHTML = arr[i];
}


function animal(){
    for(var i = 0; i < squares.length; i++){
    if(!animals.includes(squares[i].textContent)){
        squares[i].style.display = 'none';
    }else{
        squares[i].style.display='block'
    }
}
}
function car(){
    for(var i = 0; i < squares.length; i++){
    if(!cars.includes(squares[i].textContent)){
        squares[i].style.display = 'none';
    }else{
        squares[i].style.display='block'
    }
}
}
function fruit(){
    for(var i = 0; i < squares.length; i++){
    if(!fruits.includes(squares[i].textContent)){
        squares[i].style.display = 'none';
    }else{
        squares[i].style.display='block'
    }
}
}
function showAll(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display='block';
    }
}