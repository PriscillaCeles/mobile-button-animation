const $button = document.querySelector('.points')

const $buttonElement = document.querySelectorAll('.point')
const $buttonElement1 = document.querySelector('.point1')
const $buttonElement2 = document.querySelector('.point2')
const $buttonElement3 = document.querySelector('.point3')


$buttonElement.forEach(function($point){
  $button.addEventListener('click', function(){
    $point.classList.toggle('active')
    $button.classList.toggle('close')
})
})
