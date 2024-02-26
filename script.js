// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });

// // form
//  function sendEmail(){
//     sendEmail.Send({
//         Host : "aditi08@gmail.com",
//         Username : "kotkaraditi2019@gmail.com",
//         Password : "Pass@123",
//         To : "kotkaraditi08@gmail.com",
//         From : document.getElementById("email").value,
//         Subject : "New Contact From Enquiry",
//         Body : "Name:" +document.getElementById("name").value
//              +"<br> Email:" + document.getElementById("email").value
//              +"<br> Subject:" + document.getElementById("Subject").value
//              +"<br> Message:" + document.getElementById("Message").value

//     }).then(
//         message => alert("Message Sent Succesfully")
//     )
//  }



//  const canvas = document.grtElementById("canvas1");
//  const ctx = canvas.getContext('2d');
//  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

//  let particlesArray;

//  //get mouse position
//  let mouse = {
//      x: null,
//      y: null,
//      radius: (canvas.height/80) * (canvas.width/80);
//  }

//  window.addEventListener('mousemove',
//  function(event) {
//      mouse.x = event.x;
//      mouse.y = event.y;
//  }
//  )
//  window.addEventListener('mousemove',
//  function(event) {
//      mouse.x = event.x;
//      mouse.y = event.y;
//  }
//  );

//  //create particle
//  class particle {
//      constructor(x, y, directionX, directionY, size, color) {
//          this.x = x;
//          this.y = y;
//          this.directionX = directionX;
//          this.directionY = directionY;
//          this.size = size;
//          this.color = color;
//      }
//      //method to draw individual partical
//      draw() {
//          ctx.beginpath();
//          ctx.arc(this.x, this.y, this.size, 0, math.pI*2, false);
//          ctx.fillStyle = '#8C5523';
//          ctx.fill();
//      }
//      //chek partical position, check mouse position, move the particale, draw the paricle
//      update() {
//          //check if particle is still winthin canvas
//          if(this.x > canvas.width || this.x < 0) {
//              this.directionX = -this.directionX;
//          }
//          if(this.y > canvas.height || this.y < 0) {
//              this.directionY = -this.directionY;
//          }
//          //check collision detection 
//          let dx = mouse.x - this.x;
//          let dy = mouse.y - this.y;
//          let distance = math.sqrt(dx*dx + dy*dy);
//          if(distance < mouse.radius + this.size) {
//              if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
//                  this.x +=10;
//              }
//              if (mouse.x < this.x && this.x > this.size * 10) {
//                  this.x -=10;
//              }
//              if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
//                  this.y +=10;
//              }
//              if (mouse.y < this.y && this.y > this.size * 10) {
//                  this.y -=10;
//              }
//          }
// //          //move particale
//          this.x += this.directionX;
//          this.y += this.directionY;
//          //draw paricale
//          this.draw();
//      }
//  }
//  //create partical array
//  function init(){
//      particlesArray = [];
//      let numberOfparticles = (canvas.height + canvas.width) / 9000;
//      for (let i = 0; 1 < numberOfparticles*2; i++) {
//          let size = (math.random() * 5) +1;
//          let x = (math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
//          let y = (math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
//          let directionX = (math.random() * 5) -2.5;
//          let directionY = (math.random() * 5) -2.5;
//          let color = '#8C5523';

//          particlesArray.push(new particle(x, y, directionX, directionY, size, color));
//      }
//  }
//  //check if particles are close enough to draw line between them
//  function content(){
//      let opacityvalue = 1;
//      for(let a = 0; a < particlesArray.length; a++) {
//          for(let b = a; b < particlesArray.length; b++) {
//              let distance = ((particlesArray[a].x - particlesArray[b].x)
//              * (particlesArray[a].x - particlesArray[b].x))
//              + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y) - particlesArray[b].y);
//              if (distance < (canvas.width/7) * (canvas.height/7)){
//                  opacityvalue = 1 - (distance/20000)
//                  ctx.strokeStyle='rgba(140,85,31,' + opacityvalue +')';
//                  ctx.linewidth = 1;
//                  ctx.beginpath();
//                  ctx.moveTo(particlesArray[a].x,particlesArray[a].y);
//                  ctx.lineTo(particlesArray[b].x,particlesArray[b].y);
//                  ctx.stroke();
//              }
//          }
//      }
//  }
//  //animation loop
//  function animate() {
//      requestAnimationFrame(animate);
//      ctx.clearRect(0,0,innerWidth,innerHeight);
//      for(let i = 0; i < particlesArray.length; i++) {
//          particlesArray[i].update();
//      }
//      connect();
//  }
// //resize event
// window.addEventListener('resize',
// function() {
//  canvas.width = innerWidth;
//  canvas.height = innerHeight;
//  mouse.radius = ((canvas.height/80) * (canvas.height/80));
//  init();
// }
// );
// //mouse out event
// window.addEventListener('mouseout',
// function(){
//  mouse.x = undefined;
//  mouse.x = undefined;
// }
// );
//  init();
//  animate();




$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// form
 function sendEmail(){
    sendEmail.Send({
        Host : "aditi08@gmail.com",
        Username : "kotkaraditi2019@gmail.com",
        Password : "Pass@123",
        To : "kotkaraditi08@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name:" +document.getElementById("name").value
             +"<br> Email:" + document.getElementById("email").value
             +"<br> Subject:" + document.getElementById("Subject").value
             +"<br> Message:" + document.getElementById("Message").value

    }).then(
        message => alert("Message Sent Succesfully")
    )
 }