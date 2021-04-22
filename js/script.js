
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider')

let sectionItem = 0;

next.addEventListener('click', function(){
    sectionItem = (sectionItem < 1) ? sectionItem + 1 : 1;
    slider.style.transform = 'translate(' + (sectionItem) * -50 + '%)';
})

prev.addEventListener('click', function(){
    sectionItem = (sectionItem > 0) ? sectionItem - 1 : 0;
    slider.style.transform = 'translate(' + (sectionItem) * -50 + '%)';
})

