//  var crsr = document.querySelector("#cursor")
//  var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
// crsr.style.left= dets.x+"px"
// crsr.style.top= dets.y+"px"
// // code to make the blur in thr cneter and move with the cursor
// blur.style.left= dets.x-150+"px"
// blur.style.top= dets.y-150+"px"
// })
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

var mouseX = 0, mouseY = 0;
var blurPosX = 0, blurPosY = 0;

// Update mouse position on mousemove
document.addEventListener("mousemove", function(dets) {
    mouseX = dets.x;
    mouseY = dets.y;
});

function animate() {
    // Smoothly interpolate the position of the blurred cursor
    blurPosX += (mouseX - blurPosX) * 0.1; // Delay factor for the blur
    blurPosY += (mouseY - blurPosY) * 0.1

    // Set the position for the main cursor
    crsr.style.left = mouseX + "px";
    crsr.style.top = mouseY + "px";
    
    // Set the position for the blurred cursor with the calculated delay
    blur.style.left = blurPosX - (blur.offsetWidth / 2) + "px";
    blur.style.top = blurPosY - (blur.offsetHeight / 2) + "px";

    // Request the next frame to continue the animation
    requestAnimationFrame(animate);
}

// Start the animation
animate();



gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
  height:"110px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:3
  }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start:"top -50%",
        end:"top -100%",
        scrub:3
    }

})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "3px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });