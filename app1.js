//INDEX
const tabsEl = document.querySelector('.tabs')
const btns = document.querySelectorAll('.botao-1')
const pags = document.querySelectorAll('.conteudo-1')

tabsEl.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove('atual')
        })
        e.target.classList.add('atual')
        pags.forEach((article) => {
            article.classList.remove('atual')
        })
        const element = document.getElementById(id)
        element.classList.add('atual')
    }
})

const slideCx = document.querySelector('.cx-slide')
const slidesEl = document.querySelector('.slides')
let clonesHeight
let sliderHeight
let clones = []
let disableScroll = false
let scrollPos
const itens = [...document.querySelectorAll('.slider')]
const imagens = [...document.querySelectorAll('.img-div')]

imagens.forEach((imagem, idx) => {
    imagem.style.backgroundImage = `url(./imagens/${idx+1}.jpg)`
})

itens.forEach(item => {
    let clone = item.cloneNode(true)
    clone.classList.add('clone')
    slidesEl.appendChild(clone)
    clones.push(clone)
})

function getClonesHeight() {
    let height = 0
    clones.forEach(clone => {
        height += clone.offsetHeight
    })
    return height
}

function getScrollPos() {
    return window.scrollY
}

function scrollUpdate () {
    scrollPos = getScrollPos()
    if(clonesHeight + scrollPos >= sliderHeight){
        window.scrollTo({top: 1})
    }else if(scrollPos <= 0) {
        window.scrollTo({top: sliderHeight - clonesHeight - 1})
    }
    slidesEl.style.transform = `translateY(${-window.scrollY}px)`
    requestAnimationFrame(scrollUpdate)
}

function onLoad() {
    calcDimen()
    document.body.style.height = `${sliderHeight}px`
    scrollUpdate()
}
function calcDimen() {
    sliderHeight = slidesEl.getBoundingClientRect().height
    clonesHeight = getClonesHeight()
}
onLoad()