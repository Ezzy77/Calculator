let numbers = document.querySelectorAll('.numerical-btn');
let operations = document.querySelectorAll('.operation-btn');
let displayScreen = document.querySelector('.display');
let result = document.getElementById('equal');
let resetBtn = document.getElementById('reset');

numbers.forEach(number => number.addEventListener("click",  ()=>{
    displayScreen.innerHTML += number.innerHTML;
}));

operations.forEach(operation => operation.addEventListener('click', ()=>{
    displayScreen.innerHTML += operation.innerHTML;
}));


result.addEventListener('click', ()=>{
    let results;
    results = eval(displayScreen.innerHTML);
    displayScreen.innerHTML = results;

});

resetBtn.addEventListener('click', ()=>{
    displayScreen.innerHTML = '';
});