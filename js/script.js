document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.navigation'),
          menu = document.querySelector('.menu'),
          burger = document.querySelector('.burger'),
          burgerMenu = document.querySelector('.burger-menu'),
          span = document.querySelector('span'),
          linkItemMenu = burgerMenu.querySelectorAll('.menu__item');
         


          menuBtn.addEventListener('click', ()=> {
            if(!menu.classList.contains('menu_active')){
                menu.classList.add('menu_active');
                menuBtn.innerHTML = 'Close';
            } else{
                menu.classList.remove('menu_active');
                menuBtn.innerHTML = 'Menu';
            }
          });
          
          burger.addEventListener('click', ()=>{
            if(burgerMenu.classList.contains('hidden')){
                burgerMenu.classList.remove('hidden');
                span.classList.add('active');
                linkItemMenu.forEach(item =>{
                  setTimeout(()=>{
                    if(!item.classList.contains('menu__item_active')){
                        item.classList.add('menu__item_active');
                    }
                 }, 50);
                });
                 
            }else{
                burgerMenu.classList.add('hidden');
                span.classList.remove('active');
            }
          });
          function showItem () {
            if(!item.classList.contains('menu__item_active')){
                item.classList.add('menu__item_active');
            }
          }
          function showItem (item){
            if(!item.classList.contains('menu__item_active')){
                return;
            }
            item.classList.add('menu__item_active')
          }
          console.log(linkItemMenu)
          linkItemMenu.forEach(item =>{
              item.addEventListener('click', () =>{
                burgerMenu.classList.add('hidden');
                span.classList.remove('active');
              
                showItem(item)
              });
          });
          console.log(`
           Верстка валидная [10];
           Семантика (header, main, footer, article, nav, section, aside, h1-3) [20];
           css стили [10];
           контейнер по центру [10];
           адаптив[10]; (секция кода со скролом, к адаптиву не относится такова задумка)
           меню/бургер[10];
           изображение [10];
           контакты и скилы в <ul> [10];
           cv инфо о себе , контакты [10];
           подстветка кода [10];
           изображение проектов со ссылками и _blank [10];
           cv на English [10];
           Pull request [10];
           видео [-10];
           _____________
           итого [140]
          `);
          console.log('ссылочка на пул:  ' )

});