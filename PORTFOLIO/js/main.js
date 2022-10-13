const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav-link');

//to open and close the hamburger
navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
});

// to automatically redirect us to the section clicked in the hamburger 
 navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
  
 });