const menuBtn = document.querySelector('.menu-icon')
const menus = document.querySelector('.navlink')
menuBtn.addEventListener("click",()=>{
    menus.classList.toggle('menu-add')
})