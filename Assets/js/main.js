const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')
//-------------Menu Show
//------------Validate if constant exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')  
    })
}