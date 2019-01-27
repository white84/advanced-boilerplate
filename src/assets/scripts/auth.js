console.log("auth module loaded");

const parallaxContainer = document.querySelector('.parallax');
const layers = Array.from(parallaxContainer.children);
console.log(layers);

const moveLayers = (e) => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    layers.forEach((layer, i) => {
        const deliver = i / 100;
        const positionX = initialX * deliver;
        const positionY = initialY * deliver;
        const bottomPosition = (window.innerHeight / 2) * deliver;
        const image = layer.children[0];

        image.style.bottom = `-${bottomPosition}px`;
        //debugger;
        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    })
    //console.log(initialX, initialY);
}

window.addEventListener('mousemove', moveLayers);