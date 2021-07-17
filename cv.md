 ![photo Max](/img/2.jpg)

 # Maxim Klimenkov 

## Contacts
 **tel:** *+375447749383*  
 **email:** *mxstron@gmail.com*  
**telegram:** *@maxsimklimenkov*  
**location:** *Minsk*  
## About

My goal is continuous development through learning.
My interests range from natural science disciplines such as chemistry and biology to humanitarian disciplines such as history and sociology. 
Of particular interest is web development, which I devote a lot of free time to.
Among my qualities I can single out as persistence in solving problems, quick search and analysis of information.

## Skills/Technologies:

**HTML5** ★★★★★
**CSS3**  ★★★★★
**SASS**  ★★★☆☆
**BEM**   ★★★★☆
**Flexbox** ★★★★☆
**JavaScript** **Basics** ★★☆☆☆
**PHP** **Basics**  ★☆☆☆☆
**MySQL** **Basics** ★☆☆☆☆
#### Tools:
**Gulp**
**Webpack**
**GitHub**
**Figma**
**VSCode**
***Responsive and cross-browser layout***

## language
**English: A1**
## Education

***HTML&CSS***  programming courses - IT SHATLE  2020  
***JavaScript*** independent study ([Современный учебник JavaScript](https://learn.javascript.ru/), [WebDev с нуля. Канал Алекса Лущенко](https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg), [loftblog](https://www.youtube.com/channel/UCIIt69f5D44s2cdb9vXQNzA), Udemy Полный курс по JavaScript + React)  
***PHP*** independent study.
 An uncountable number of lectures and trainings on YouTube.  

 ## Projects
The training project is a three-page website. I used HTML 5, SCSS, JS. The main task is an adaptive gallery with a slider, to work with the "panini" template engine. The layout was collected by the Gulp assembly. Full screen video background.
I am still working on the project at the moment.

 https://mxklim.github.io/KonnoePomeste/ 

In this project I used HTML, SCSS, JS. The purpose of the work is an adaptive site, with a "Slick Slider" slider. Verification of mail and sending messages to the Telegram channel. PHP script for transliteration from Cyrillic to Latin (hosting features)

https://mxklim.github.io/webschool/


## Сode examples
A section of HTML markup using the BEM selector naming methodology  

    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="#" class="logo__link">конное поместье</a>
            </div>            
            <nav>
                <ul class="menu">
                    <li class="menu__item menu__item_active"><a href ="#" class="menu__link"> Главная</a></li>
                    <li class="menu__item"><a href ="#about" class="menu__link"> О Нас</a></li>
                    <li class="menu__item"><a href ="#gallary" class="menu__link"> Галерея</a></li>
                    <li class="menu__item"><a href ="#sales" class="menu__link"> Цены</a></li>
                    <li class="menu__item"><a href ="#way" class="menu__link"> Проезд</a></li>
                    <li class="menu__item"><a href ="#contacts" class="menu__link"> Контакты</a></li>
                </ul>  
            </nav>
            <div class="burger">
                <span></span>
            </div>
            <div class="header__content">
                <div class="full-screen">
                    <video autoplay muted loop preload="auto" class="full-screen_video">
                        <source type="video/mp4" src="../assets/videos/v.mp4">
                    </video>
                </div>
                <div class="header__content-logo"> </div>
                <p class="header__content-title"> </p>
                <p class="header__content-subtitle"> </p> 
                <p class="header__content-text"> </p> 
            </div> 
        </div>    
    </header>  
     
An example of styling the background of a button using the SCSS mixin as well as built-in 'darken' functions and variables  

    @mixin button-bg {
        background: $bgcolor;
        &:hover {
            background:darken($bgcolor,10%;
            transition: all 0.3s ease-in;
        }
        &:active {
            background:darken($bgcolor,25%);
        } 
    }  

    
A simple working slider for viewing photos from the gallery made in JavaScript 

    const gallaryImg = document.querySelectorAll('.gellary__img'),
      modal = document.querySelector('.modal'),
      activeImg = document.querySelector('.active__img'),
      overly = document.querySelector('.substrate'),
      close = document.querySelector('.close'),
      next = document.querySelector('.modal__right'),
      prev = document.querySelector('.modal__left');
      
    gallaryImg.forEach(item =>{
        item.addEventListener('click', (e)=>{
            activeImg.src = e.target.src;
            modal.style.display ="block";
            overly.style.display = "block";
        document.querySelector('body').classList.add('scrollNone');
        });
    })
    close.addEventListener('click',()=>{
        modal.style.display ="none";
        overly.style.display = "none";
    document.querySelector('body').classList.remove('scrollNone');
    })
    overly.addEventListener('click', ()=>{
        modal.style.display ="none";
        overly.style.display = "none";
        document.querySelector('body').classList.remove('scrollNone');
    })

    next.addEventListener('click', ()=>{          
    for(let i = 0; i < gallaryImg.length; i++){
            if(activeImg.src === gallaryImg[i].src){
                console.log(i);
            
                if(i === (gallaryImg.length-1)){
                    activeImg.src = gallaryImg[i=0].src;
                }
                activeImg.src = gallaryImg[i+1].src;
                break
            }  
        } 
    });

    prev.addEventListener('click', ()=>{          
        for(let i = 0; i < gallaryImg.length; i++){
            if(activeImg.src === gallaryImg[i].src){
                if(i < 1){
                    activeImg.src = gallaryImg[gallaryImg.length-1].src
                }
                activeImg.src = gallaryImg[--i].src;
                    break
            }  
        } 
    });  


Task solution code Replace With Alphabet Position (6 kuy)  
[www.codewars.com ](https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript)


    function alphabetPosition(text){
        let strAlphabet = "abcdefghijklmnopqrstuvwxyz",
            arrStr =[];
        text = text.toLowerCase();
        
        for (let i = 0; i < text.length; i++) {
            if(strAlphabet.indexOf(text[i]) >= 0) {
            addLiterStr(i)
            }
        }

        function addLiterStr(i){
            if( strAlphabet.indexOf(text[i])>= 0) {
                arrStr.push( strAlphabet.indexOf(text[i])+1);
            } else{
            addLiterStr(i);
            }
        }
        text = arrStr.join(" ");
        return text;
    }


