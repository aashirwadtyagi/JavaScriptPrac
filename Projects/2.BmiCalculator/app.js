const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = `Please give a valid height`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML = `please give a valid weight`
    }else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        res.innerHTML = `<span>${BMI}</span>`
    }
})
