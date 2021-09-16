document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.navigation'),
          menu = document.querySelector('.menu');
          menuBtn.addEventListener('click', ()=> {
            if(!menu.classList.contains('menu_active')){
                menu.classList.add('menu_active');
                menuBtn.innerHTML = 'Close';
            } else{
                menu.classList.remove('menu_active');
                menuBtn.innerHTML = 'Menu';

            }
          });    
});