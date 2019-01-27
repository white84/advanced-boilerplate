document.getElementById('hamburger-menu').addEventListener('click', function() { 
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementsByClassName('main-menu')[0];
    const menuItems =  document.getElementsByClassName('main-menu-item');

    const body = document.body;
    var i = 0;
    if(hamburgerMenu.classList.contains('is-active'))
    {
        hamburgerMenu.classList.remove('is-active');
        body.classList.remove('overflow-nidden');
        menu.classList.add('is-hidden');
        for(i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style = '';
        }
        window.setTimeout(() => {
            menu.classList.add('main-menu--hide');
            menu.classList.remove('is-active');
            menu.classList.remove('is-hidden');
        }, 500);
    }
    else
    {
        hamburgerMenu.classList.add('is-active');
        body.classList.add('overflow-nidden');
        for(i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style.transitionDelay = (1 + i / 10) + 's';
        }
        menu.classList.remove('main-menu--hide');
        window.setTimeout(() => {
            menu.classList.add('is-active');
            window.scroll(0, 0);
        }, 100);
    }
 })

 var parallax = document.getElementsByClassName('parallax')[0];
 window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
     parallax.scrollTop = scrolled;
 };