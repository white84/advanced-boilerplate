document.getElementById('hamburger-menu').addEventListener('click', function() { 
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementsByClassName('main-menu')[0];
    var menuItems =  document.getElementsByClassName('main-menu-item');
    const body = document.body;
    if(hamburgerMenu.classList.contains('is-active'))
    {
        hamburgerMenu.classList.remove('is-active');
        body.classList.remove('overflow-nidden');
        menu.classList.remove('is-active');
        for(var i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style = '';
        }
    }
    else
    {
        window.scroll(0, 0);
        hamburgerMenu.classList.add('is-active');
        body.classList.add('overflow-nidden');
        menu.classList.add('is-active');
        for(var i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style.transitionDelay = (1 + i / 10) + 's';
        }
    }
 })