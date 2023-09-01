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
    /*active sections for animation on scroll */
    sec.classList.add('show-animate');

    
}
    /*if want to use animation that repeats on scroll use this */ 
    else{
        sec.classList.remove('show-animate');
    }


    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

    //remove toggle icon and navbar when clcik navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  

    /*Animation footer on scroll*/
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);

    const dots = document.querySelectorAll('.skills .dot');
    const numbers = document.querySelectorAll('.skills .number');

    // .dot ve .number öğelerinin yeniden başlaması için gereken stil ve sınıfları uygulayın
    dots.forEach(dot => {
        dot.style.animation = 'none';
        void dot.offsetWidth; // Bir reflow tetikleyerek animasyonun sıfırlanmasını sağlayın
        dot.style.animation = 'animateDot 2s linear forwards';
    });

    numbers.forEach(number => {
        number.style.animation = 'none';
        void number.offsetWidth; // Bir reflow tetikleyerek animasyonun sıfırlanmasını sağlayın
        number.style.animation = 'fadeIN 1s linear forwards';
    });
}


