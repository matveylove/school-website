const btnEntry = document.querySelector('.btn-entry');
const btnReg = document.querySelector('.btn-registration');
const boxAuth = document.querySelector('.box-auth');
const boxReg = document.querySelector('.box-reg');

btnReg.addEventListener('click', function(e) {
    e.preventDefault();
    boxAuth.classList.add('display-hide')
    boxReg.classList.add('display-show');
    console.log('click')
})

btnEntry.addEventListener('click', function(e) {
    e.preventDefault();
    boxReg.classList.remove('display-show');
    boxAuth.classList.remove('display-hide');
    boxAuth.classList.add('display-show');
    console.log('click')
})