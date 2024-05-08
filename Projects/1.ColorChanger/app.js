//acquiring buttons
const butt = document.querySelectorAll('.button');
const bod = document.querySelector('body')

//using events ex click, moving cursor etc
butt.forEach( function(b) {
    console.log(b);
    b.addEventListener('click', (eve) => {
        console.log(eve);
        console.log(eve.target);
        if(eve.target.id === 'grey'){
            bod.style.backgroundColor = eve.target.id;
        }
        if(eve.target.id === 'white'){
            bod.style.backgroundColor = eve.target.id;
        }
        if(eve.target.id === 'blue'){
            bod.style.backgroundColor = eve.target.id;
        }
        if(eve.target.id === 'yellow'){
            bod.style.backgroundColor = eve.target.id;
        }
        if(eve.target.id === 'purple'){
            bod.style.backgroundColor = eve.target.id;
        }
    })
})

