

const element = document.querySelector('element');
const element2 = document.querySelector('element2');

element.addEventListener('click', function(){
    if(btnHam.className !== ""){
        element.style.display = "none";
        element2.style.display = "block";
    }
})

element2.addEventListener('click', function(){
    if(btnHam.className !== ""){
        element.style.display = "block";
        element2.style.display = "none";
    }
})
