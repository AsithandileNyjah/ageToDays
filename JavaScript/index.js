let years = document.querySelector('[years]').value

let btn = document.querySelector('[multiply]')

let btn2 = document.querySelector('[clear]')

// factoring leap year
const days = Math.ceil(365.25)

let display = document.querySelector('[days]')

// event listeners for the buttons 

btn.addEventListener('click', multiply)
btn2.addEventListener('click', clear)

function multiply (){
    let years = document.querySelector('[years]').value
    const days = Math.ceil(365.25)
    let ans = days * years
    console.log(ans);
    display.value = ans
}

function clear (){
    document.querySelector('[years]').value = '';
    document.querySelector('[days]').value = '';
}