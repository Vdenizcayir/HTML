//togle icon nbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');  
}



//togle icon nbar




let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

//scroll section
window.onscroll=()=>
{
    section.forEach(sec=>{
let top = window.scrollY;
let offset = sec.offsetTop-100;
let height=sec.offsetHeight;
let id=sec.getAttribute('id');

if(top>=offset && top<offset+height){
    navlinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
    });
}

    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

}