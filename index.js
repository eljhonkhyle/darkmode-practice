const toggleSwitch = document.getElementById("moon")
const body = document.querySelector('body')

toggleSwitch.addEventListener('click', function(){
this.classList.toggle('bi-sun-fill')


if(this.classList.toggle('bi-brightness-low-fill')){
    body.style.background = '#111111'
    body.style.color = 'white'
    body.style.transition = '1s'
}else{
    (this.classList.toggle('bi-brightness-high-fill'))
    body.style.background = 'white'
    body.style.color = 'black'
    body.style.transition = '1s'
}

})