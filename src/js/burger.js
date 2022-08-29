const burder = document.querySelector('.burger');
const boxBurger = document.querySelector('.nav-menu');

burder.addEventListener('mouseover', function(e) {
    e.preventDefault()
    boxBurger.style.display = 'flex'
});

burder.addEventListener('mouseout', function(e) {
    e.preventDefault()
    boxBurger.style.display = 'none'
});

boxBurger.addEventListener('mouseover', function(e) {
    e.preventDefault()
    boxBurger.style.display = 'flex'
});

boxBurger.addEventListener('mouseout', function(e) {
    e.preventDefault()
    boxBurger.style.display = 'none'
});







