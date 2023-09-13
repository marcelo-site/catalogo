const elToogle = document.querySelector('#toogle')
const background =document.querySelector('#background')
const containerToogleImg = document.querySelector('#toogle-img-default')
const toogleImgdefault = document.querySelector('#toogle-img-default img')
const changeImgdefault = document.querySelectorAll('#toogle-img-default span')
const containerMiniPicture = document.querySelector('.mini-picture')
const miniPicture = document.querySelectorAll('.mini-picture img')
const sizes = document.querySelectorAll('.sizes label')
const inputSizes = document.querySelectorAll('.sizes input')
const colors = document.querySelectorAll('.colors label')
const inputColors = document.querySelectorAll('.colors input')
const body = document.querySelector('body')

const toogle = (e) => {
    elToogle.style.transform = 'translatex(0)'
    background.style.display = 'block'
    body.style.overflow = 'hidden'

}
const exitToogle = () => {
    elToogle.style.transform = 'translatex(90vw)'
    background.style.display = 'none'
    body.style.overflow = ''
}
const bigMiniPicture = (el) => el.style.transform = 'scale(1.15)'

let currentImg = 0
changeImgdefault[0].addEventListener('click', (change) => {
    if (currentImg < miniPicture.length && currentImg >= 0) {
        if (currentImg > 0) {
            currentImg--
            toogleImgdefault.src = `${miniPicture[currentImg].src}`
            miniPicture.forEach(pictture => pictture.style.transform = '')
            bigMiniPicture(miniPicture[currentImg])
            if(currentImg === 0) {
                changeImgdefault[0].style.display = 'none' 
            }
            changeImgdefault[1].style.display = '' 
        }
    }
})

changeImgdefault[1].addEventListener('click', (change) => {
    if (currentImg < miniPicture.length - 1) {
        currentImg++
        toogleImgdefault.src = `${miniPicture[currentImg].src}`
        miniPicture.forEach(pictture => pictture.style.transform = '')
        bigMiniPicture(miniPicture[currentImg])
        if(currentImg === miniPicture.length - 1) {
            changeImgdefault[1].style.display = 'none' 
        }
        changeImgdefault[0].style.display = '' 
    }
})

miniPicture.forEach((img, i) => img.addEventListener('click', (img) => {
    currentImg = i
    toogleImgdefault.src = `${img.target.src}`
    miniPicture.forEach(pictture => pictture.style.transform = '')
    bigMiniPicture(miniPicture[currentImg])
    changeImgdefault.forEach(change => change.style.display = '')
    if(currentImg === miniPicture.length - 1) {
        changeImgdefault[1].style.display = 'none' 
    } else if (currentImg === 0) {
        changeImgdefault[0].style.display = 'none' 
    }
}))

sizes.forEach((size, i) => size.addEventListener('click', () => {
    console.log(inputSizes[i].value)
    sizes.forEach(el => {
        el.style.transform = 'scale(1.0)'
        el.style.color = ''
    })
    size.style.color = 'red'
    size.style.transform = 'scale(1.2)'
}))

colors.forEach((color, i) => color.addEventListener('click', async () => {
    colors.forEach(el => el.style.transform = 'scale(1.0)')
    color.style.transform = 'scale(1.2)'
    const loading = document.createElement('div')
    loading.classList.add('loading')
    loading.innerHTML = '<div></div>'
    containerToogleImg.appendChild(loading)
    changeImgdefault.forEach(change => change.style.display = 'none')
    try {
        const src = inputColors[i].value
        const response = await fetch(`src/assets/image/${src}`)
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const srcImg = await response.blob();
    toogleImgdefault.src = URL.createObjectURL(srcImg);
    containerMiniPicture.style.display = 'none'
    containerToogleImg.removeChild(loading)
    } catch (error) {
        console.log(error)
    }
}))
