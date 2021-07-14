

const colors = ["Green", "Red", "Yellow", "#f15025", 
"purple", "Blue", "orange"]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

function getrandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
btn.addEventListener('click',function(){
   const randomNumber = getrandomNumber();
   color.textContent = colors[randomNumber]
   document.body.style.background = colors[randomNumber];
})