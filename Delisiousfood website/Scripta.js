//javascript for navigation bar effect on scroll

window.addEventListener("scroll",function(){
  var header = this.document.querySelector("header");
  header.classList.toggle('stickey',this.window.scrollY > 0 );
});

//javascript for responsive navgation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () =>{
  menu.classList.remove('active');
});