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



