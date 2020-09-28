var userName = prompt('Enter your name so we can know who are you.','Guest');

console.log(`User's name is ${userName}`);

userName = userName.toLowerCase();

if(userName == 'krishna' || userName == 'ks'){
    alert('WELCOME SIR');
} else{
    alert(`WELCOME ${userName}`);
}

localStorage.setItem(`user's name is `, userName);

// =======================static mathods=======================
if(userName == 'krishna' || userName == 'ks'){
setTimeout(() => {
    console.log(`WELCOME SIR`);
}, 4000);
} 
else{
    console.log(`welcome ${userName}`);
}

// =======================blog alert function=======================

function blog(){
    alert('⚠️This Blog page is not available now. Coming soon');
}

// =======================responsive navabr=======================

var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
})

// =======================header responsive=======================
// buttons
var btn1 = document.querySelector('.bb-1');
var btn2 = document.querySelector('.bb-2');
var btn3 = document.querySelector('.bb-3');

// boxes
var container1 = document.querySelector('.box-1');
var container2 = document.querySelector('.box-2');
var container3 = document.querySelector('.box-3');

btn1.addEventListener('click',()=>{
    container1.classList.toggle('box-highlight');
    container2.classList.remove('box-highlight');
    container3.classList.remove('box-highlight');
})

btn2.addEventListener('click',()=>{
    container1.classList.remove('box-highlight');
    container2.classList.toggle('box-highlight');
    container3.classList.remove('box-highlight');
})

btn3.addEventListener('click',()=>{
    container1.classList.remove('box-highlight');
    container2.classList.remove('box-highlight');
    container3.classList.toggle('box-highlight');
})