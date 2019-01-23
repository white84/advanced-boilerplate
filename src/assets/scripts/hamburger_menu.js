document.getElementById('hamburger-menu').addEventListener('click', function() { 
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementsByClassName('main-menu')[0];
    const body = document.body;
    if(hamburgerMenu.classList.contains('is-active'))
    {
        hamburgerMenu.classList.remove('is-active');
        body.classList.remove('overflow-nidden');
        menu.childNodes.forEach((childNode) => {
            if(childNode.nodeType === 1)
                childNode.classList.remove('is-active');
        })
    }
    else
    {
        window.scroll(0, 0);
        hamburgerMenu.classList.add('is-active');
        body.classList.add('overflow-nidden');

        menu.childNodes.forEach((childNode) => {
            if(childNode.nodeType === 1)
                childNode.classList.add('is-active');
        })
    }
 })