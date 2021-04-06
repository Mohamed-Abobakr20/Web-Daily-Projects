const loadText = document.querySelector('.loading')
const bg = document.querySelector('.img')

let load = 0

// start the function of bluring
let int = setInterval(blurring, 80)

// create the bluring function
function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
// scale the values to each other
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}