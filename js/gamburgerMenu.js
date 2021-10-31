// let gambBtn = document.getElementById('mobile-menu');
// let navList = document.getElementById('nav-menu')

// gambBtn.addEventListener('click', function(){
//     // navList.classList.toggle('show-menu')
//     navList.classList.toggle('active')
//     gambBtn.classList.toggle('is-active')
// })

const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const body = document.getElementById('body');
const background = document.getElementById('active-background');


document.getElementById('open-menu') .addEventListener('click', function() {
    overlay.classList.add('show-menu');
    body.classList.add('active_bgc');
    background.classList.add('active_bgc') 
    background.style.display = 'block'
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu')
    body.classList.remove('active_bgc');
    background.classList.remove('active_bgc') 
})