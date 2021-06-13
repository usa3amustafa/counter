const number = document.getElementById('number')
const increase = document.getElementById('increase')
const reset = document.getElementById('reset')
const decrease = document.getElementById('decrease')
const numberColor = () => {
  if (x < 0) {
    number.classList.remove('green')
    number.classList.remove('black')
    number.classList.add('red')
  } else if (x > 0) {
    number.classList.remove('red')
    number.classList.remove('black')
    number.classList.add('green')
  } else if (x == 0) {
    number.classList.remove('green')
    number.classList.remove('red')
    number.classList.add('black')
  } else {
    console.log('something wrong')
  }
}

let x = 0

const increasef = () => {
  x++
  numberColor()
  number.innerHTML = x
}
const decreasef = () => {
  x--
  numberColor()
  number.innerHTML = x
}
const resetf = () => {
  x = 0
  numberColor()
  number.innerHTML = x
}

increase.addEventListener('click', increasef)
decrease.addEventListener('click', decreasef)
reset.addEventListener('click', resetf)
