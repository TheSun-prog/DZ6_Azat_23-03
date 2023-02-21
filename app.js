const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const num = document.querySelector('h1')

plus.onclick = (event) => {
    if (num.innerText < 10) {
        num.innerText++
    }
}

minus.onclick = (event) => {
    if (num.innerText > -10) {
        num.innerText--
    }
}
