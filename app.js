//MENU
const menu = [
    {
        id: 1,
        title: `Carmelo's burger`,
        category: `tradicionais`,
        price: 12.99,
        img: './imagens/burger.jpg',
        desc: `Burger com queijo prato, picles e maionese em pão tradicional`,
    },
    {
        id: 2,
        title: `Carmelo's clássico`,
        category: 'tradicionais',
        price: 18.99,
        img: './imagens/classico.png',
        desc: `Burger com queijo prato, alface, picles, tomate, cebola e maionese em pão tradicional`,
    },
    {
        id: 3,
        title: `Carmelo's royale`,
        category: 'especiais',
        price: 32.99,
        img: './imagens/royale.jpg',
        desc: `BIG Burger com queijo cheddar e maionese em pão brioche`,
    },
    {
        id: 4,
        title: `Carmelo's picanha`,
        category: 'especiais',
        price: 32.99,
        img: './imagens/picanha.png',
        desc: `Burger de picanha com queijo cheddar, pimentão caramelizado, alface americana e maionese em pão brioche`,
    },
    {
        id: 5,
        title: `Carmelo's rib barbecue`,
        category: 'especiais',
        price: 32.99,
        img: './imagens/rib.jpg',
        desc: `Burger com blend de pernil e costela, com molho barbecue, queijo cheddar, cebola crispy, tomate, alface americana e maionese em pão brioche`, 
    },
    {
        id: 6,
        title: `Porção de batata com molho cheddar e bacon`,
        category: 'porções',
        price: 32.99,
        img: './imagens/porcao.jpg',
        desc: `Burger com blend de pernil e costela, com molho barbecue, queijo cheddar, cebola crispy, tomate, alface americana e maionese em pão brioche`, 
    },
    {
        id: 6,
        title: `Porção de calabresa acebolada`,
        category: 'porções',
        price: 32.99,
        img: './imagens/onionrings.png',
        desc: `Burger com blend de pernil e costela, com molho barbecue, queijo cheddar, cebola crispy, tomate, alface americana e maionese em pão brioche`, 
    },
]
const conteudoEl = document.querySelector('.conteudo')
const contBtn = document.querySelector('.btn-cont')

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)
  displayMenuButtons()
  })

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
            <img src=${item.img} class="foto" alt="menu-item">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">R$${item.price}</h4>
                </header>
                  <p class="item-text">${item.desc}</p>
              </div>
            </article>`
  })
  displayMenu = displayMenu.join('')
  conteudoEl.innerHTML = displayMenu
}

function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if(!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  },['todos'])

  const categoryBtns = categories.map((category) => {
    return `<button class="botao" type="button" data-id=${category}>${category}</button>`
  }).join('')
  
  contBtn.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.botao')
  
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter((menuItem) => {
        if(menuItem.category === category) {
          return menuItem;
        }
      })
      if(category === 'todos') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      } 
    })
  })
}
//INDEX
//Barra Fixa
const cabecaCx = document.querySelector('.cabeca')
const contNav = document.querySelector('.nav')
const fixNav = document.querySelector('.menu')
console.log(cabecaCx.offsetHeight);
console.log(contNav.offsetTop)
const scrollHeight = window.pageYOffset
window.addEventListener('scroll', () => {
  if (window.scrollY > contNav.offsetTop - cabecaCx.offsetHeight + 240) {
    fixNav.classList.add('fixed-nav')
  } else {
    fixNav.classList.remove('fixed-nav')
  }
  if(scrollHeight > 250) {
    fixNav.classList.add('show-link')
  } else {
    fixNav.classList.remove('show-link')
}
})
