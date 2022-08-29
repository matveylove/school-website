const cityMenu = document.querySelector('.menu-city-wrapeer');
const btnLocation = document.querySelector('.header-location');

btnLocation.addEventListener('mouseover', function() {
    cityMenu.style.display = 'inline-block';
});

btnLocation.addEventListener('mouseout', function() {
    cityMenu.style.display = 'none';
});