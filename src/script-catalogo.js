let counter = 0;
const products = document.querySelector('.catalogo .product');

function left() {
    counter--;
    scroll();
}

function right() {
    counter++;
    scroll();
}

function scroll() {
    const productWidth = products.offsetWidth + 40; // Adicionando a margem direita do .product
    const maxScroll = products.scrollWidth - document.querySelector('.catalogo').offsetWidth;

    // Limitar o valor de counter para evitar rolagem além do início ou do final
    counter = Math.min(Math.max(counter, 0), maxScroll / productWidth);

    products.style.transform = `translateX(-${counter * productWidth}px)`;
}
