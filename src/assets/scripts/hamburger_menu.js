document.getElementById('hamburger-menu').addEventListener('click', function() { 
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if(hamburgerMenu.classList.contains('is-active'))
    {
        hamburgerMenu.classList.remove('is-active');
    }
    else
    {
        hamburgerMenu.classList.add('is-active');
    }
 })