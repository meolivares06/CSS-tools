const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const rootStyles = document.documentElement.style;

const changeColorRed = e => {
    console.log(e.target.value);
    rootStyles.setProperty('--red', e.target.value);
}
red.addEventListener('change', (e)=> {
    changeColorRed(e);
});

red.addEventListener('mousemove', (e)=> {
    changeColorRed(e);
});



const changeColorGreen = e => {
    console.log(e.target.value);
    rootStyles.setProperty('--green', e.target.value);
}
green.addEventListener('change', (e)=> {
    changeColorGreen(e);
});

green.addEventListener('mousemove', (e)=> {
    changeColorGreen(e);
});



const changeColorBlue = e => {
    console.log(e.target.value);
    rootStyles.setProperty('--blue', e.target.value);
}
blue.addEventListener('change', (e)=> {
    changeColorBlue(e);
});

blue.addEventListener('mousemove', (e)=> {
    changeColorBlue(e);
});