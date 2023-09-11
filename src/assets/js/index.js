const elToogle = document.querySelector('#toogle')
const toogleImgdefault = document.querySelector('#toogle-img-default img')
const changeImgdefault = document.querySelectorAll('#toogle-img-default span')
const miniPicture = document.querySelectorAll('.mini-picture img')
const sizes = document.querySelectorAll('.sizes label')
const colors = document.querySelectorAll('.colors label')

const toogle = (e) => elToogle.style.transform = 'translatex(0)'

const exitToogle = () => elToogle.style.transform = 'translatex(92vw)'

let currentImg = 0
changeImgdefault[0].addEventListener('click', (img) => {
    if (currentImg < miniPicture.length && currentImg >= 0) {
        if (currentImg > 0) {
            currentImg--
            toogleImgdefault.src = `${miniPicture[currentImg].src}`
        }
    }
})

changeImgdefault[1].addEventListener('click', (img) => {
    if (currentImg < miniPicture.length - 1) {
        currentImg++
        toogleImgdefault.src = `${miniPicture[currentImg].src}`
    }
})

miniPicture.forEach((img, i) => img.addEventListener('click', (img) => {
    currentImg = i
    toogleImgdefault.src = `${img.target.src}`
}))

sizes.forEach(size => size.addEventListener('click', () => {
    sizes.forEach(el => el.style.transform = 'scale(1.0)')
    size.style.transform = 'scale(1.2)'
}))

colors.forEach(color => color.addEventListener('click', () => {
    colors.forEach(el => el.style.transform = 'scale(1.0)')
    color.style.transform = 'scale(1.2)'
}))
