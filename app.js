const number = document.getElementById('number')
// const increase = document.getElementById('increase')
// const reset = document.getElementById('reset')
// const decrease = document.getElementById('decrease')

let x = 0

const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      x--
    } else if (styles.contains('increase')) {
      x++
    } else if (styles.contains('reset')) {
      x = 0
    }
    number.textContent = x
    if (x > 0) {
      number.style.color = 'green'
    } else if (x < 0) {
      number.style.color = 'red'
    } else if (x === 0) {
      number.style.color = '#222'
    }
  })
})

// const numberColor = () => {
//   if (x < 0) {
//     number.classList.remove('green')
//     number.classList.remove('black')
//     number.classList.add('red')
//   } else if (x > 0) {
//     number.classList.remove('red')
//     number.classList.remove('black')
//     number.classList.add('green')
//   } else if (x == 0) {
//     number.classList.remove('green')
//     number.classList.remove('red')
//     number.classList.add('black')
//   } else {
//     console.log('something wrong')
//   }
// }

// let x = 0

// const increasef = () => {
//   x++
//   numberColor()
//   number.innerHTML = x
// }
// const decreasef = () => {
//   x--
//   numberColor()
//   number.innerHTML = x
// }
// const resetf = () => {
//   x = 0
//   numberColor()
//   number.innerHTML = x
// }

// increase.addEventListener('click', increasef)
// decrease.addEventListener('click', decreasef)
// reset.addEventListener('click', resetf)
