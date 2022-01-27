const checkCreditsBtn = document.querySelector('.bottombtn');
const credits = document.querySelector('.credits-section');

checkCreditsBtn.addEventListener('click', function() {
    credits.classList.toggle('invisible');
});