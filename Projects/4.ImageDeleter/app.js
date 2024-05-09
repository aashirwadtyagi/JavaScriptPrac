const iamges = document.querySelector('.images')

iamges.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.tagName === 'IMG'){    
    const img = e.target;

    img.remove();
}
}
)
