function moveBtnPosition(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let main = document.getElementsByClassName('main')[0];
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let page6 = document.getElementById('page6');
let page7 = document.getElementById('page7');
let page8 = document.getElementById('page8');

btnNo.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});


let btnSi2 = document.getElementById('btn_si2');
let btnNo2 = document.getElementById('btn_no2');

btnNo2.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

let btnSi3 = document.getElementById('btn_si3');
let btnNo3 = document.getElementById('btn_no3');

btnNo3.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

let btnSi4 = document.getElementById('btn_si4');
let btnNo4 = document.getElementById('btn_no4');

btnNo4.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

let btnSi5 = document.getElementById('btn_si5');
let btnNo5 = document.getElementById('btn_no5');

btnNo5.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

let btnSi6 = document.getElementById('btn_si6');
let btnNo6 = document.getElementById('btn_no6');

btnNo6.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

let btnSi7 = document.getElementById('btn_si7');
let btnNo7 = document.getElementById('btn_no7');

btnNo7.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});


let btnSi8 = document.getElementById('btn_si8');
let btnNo8 = document.getElementById('btn_no8');

btnNo8.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

btnSi.addEventListener('click', function(e) {
    alert('❤️ Muy bien pues comencemos ❤️');
   alert('❤️ 3 ❤️');
    alert('❤️ 2 ❤️');
    alert('❤️ 1 ❤️');
    alert('❤️ Go ❤️');
    main.style.display = 'none';
    page1.style.display = 'block';
})

btnSi2.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page1.style.display = 'none';
    page2.style.display = 'block';
    const cancion = new Audio('img\\madre1.mp3');
    cancion.play();
})

btnSi3.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page2.style.display = 'none';
    page3.style.display = 'block';
})

btnSi4.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page3.style.display = 'none';
    page4.style.display = 'block';
})

btnSi5.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page4.style.display = 'none';
    page5.style.display = 'block';
    
})

btnSi6.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page5.style.display = 'none';
    page6.style.display = 'block';
})

btnSi7.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page6.style.display = 'none';
    page7.style.display = 'block';
})

btnSi8.addEventListener('click', function(e) {
    //alert('Ahora pongamons serios ');
    page7.style.display = 'none';
    page8.style.display = 'block';
})

