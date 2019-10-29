// Your code goes here

//hover over images
let images = document.querySelectorAll('.img-content img');
images.forEach(ele => {
    ele.addEventListener('mouseover', event => {
        ele.style.transform = 'scale(1.1)'; 
    })
})

//scale back to normal when mouse leaves element
images.forEach(ele => {
    ele.addEventListener('mouseout', event => {
        ele.style.transform = 'scale(1)'; 
    })
})

//press space bar
let body = document.body;
body.addEventListener('keydown', event => {
    if(event.isComposing || event.keyCode === 49) {
        body.style.background = '#333';
        body.style.color = '#fff';
    }
})

//scroll with cursor on nav
let nav = document.querySelector('.main-navigation');
nav.addEventListener('wheel', event => {
    nav.style.background = '#ffebcd';
    nav.style.color = '#212529';
})

//load
window.addEventListener('load', event => {
    alert('Page loaded!');
})

//click on nav items
let navItems = document.querySelectorAll('nav a');
navItems.forEach(ele => {
    ele.addEventListener('focus', event => {
        ele.style.color = 'orange';
    })
})

//change window size
window.addEventListener('resize', event => {
    document.body.style.fontFamily = '"Indie Flower", cursive';
})

//scroll anywhere
window.addEventListener('scroll', event => {
    document.querySelectorAll('h2').forEach(ele => {
        ele.style.color = 'orange';
    })
})

//double click top image
let hero = document.querySelector('.intro img');
hero.addEventListener('dblclick', event => {
    hero.style.filter = 'blur(5px)';
})

//copy image
let imgs = document.querySelectorAll('img');
imgs.forEach(ele => {
    ele.addEventListener('copy', event => {
        ele.style.display = 'none';
    })
})