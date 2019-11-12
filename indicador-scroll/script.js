
console.log(`Altura total: ${document.documentElement.scrollHeight}`);
console.log(`Altura que se ve : ${document.documentElement.clientHeight}`);

const alturaTotal = document.documentElement.scrollHeight;
const alturaPantalla = document.documentElement.clientHeight;


const scrollUnit = (alturaTotal - alturaPantalla) / 100;
const rootStyles = document.documentElement.style;

addEventListener('scroll', () => {
    rootStyles.setProperty('--width', Math.round(scrollY / scrollUnit));
});
