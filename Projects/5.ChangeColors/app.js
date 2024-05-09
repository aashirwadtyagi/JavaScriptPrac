//random color generator

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

//randon number
// Math.floor(Math.random()*16)

let inter;
const startChanging = function() {
    inter = setInterval(changebg, 1000);
    function changebg(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChanging = () => {
    clearInterval(inter)
};

document.querySelector('#start').addEventListener
('click', startChanging);

document.querySelector('#stop').addEventListener
('click', stopChanging);
