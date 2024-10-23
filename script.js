const video = document.querySelector('.hero-video');
const image = document.querySelector('.hero-img');

const links = document.querySelectorAll('.head1 a');
const hoverDiv = document.querySelector('.hover-div');
const hoverBoxes = document.querySelectorAll('.hoverBox');
const heroImg = document.getElementById("hero");
const standImg = document.getElementById("standImg");
const sideStand = document.getElementById("sideStand");
const designStand = document.getElementById("designStand")

const appsTop1 = document.getElementById("apps-top1");
const appsTop2 = document.getElementById("apps-top2");
const appsTop3 = document.getElementById("apps-top3");
const appsMiddle = document.getElementById("apps-middle");
const appsBottom1 = document.getElementById("apps-bottom1");
const appsBottom2 = document.getElementById("apps-bottom2");
const appsBottom3 = document.getElementById("apps-bottom3");
const env = document.getElementById("env");

AOS.init();
// init controller
var controller = new ScrollMagic.Controller();

// Show the hover-div and the corresponding hoverBox when hovering over a link
links.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    hoverBoxes.forEach(box => box.classList.remove('active'));

    // Get the ID of the hovered link
    const targetId = event.currentTarget.id;

    // Safely select the target hoverBox using its class
    const targetBox = document.querySelector(`.${targetId}`);

    check = targetBox == apple || targetBox == bag || targetBox == search;

    if (targetBox && !check) {
      targetBox.classList.add('active');
      hoverDiv.style.display = 'block';
    } else {
      hoverDiv.style.display = "none";
    }

  });
});

// Hide the hover-div and all hoverBoxes when the mouse leaves the hoverBox or hover-div
hoverBoxes.forEach(box => {
  box.addEventListener('mouseleave', () => {
    hoverDiv.style.display = 'none';
    hoverBoxes.forEach(box => box.classList.remove('active'));
  });
});

hoverDiv.addEventListener('mouseleave', () => {
  hoverDiv.style.display = 'none';
  hoverBoxes.forEach(box => box.classList.remove('active'));
});



setTimeout(() => {
  image.style.display = 'block';
  video.style.display = 'none';
}, 5555);




document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector('.inner-headings span');
  const target2 = document.querySelector('.inner-headings2 span');


  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    })
  }, observerOptions);

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target2.classList.add('animate2');
        observer.unobserve(entry.target2);
      }
    })
  }, observerOptions);

  observer2.observe(target2);

})

// build scene
new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.5, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
  .setClassToggle("#reveal1", "visible") // add class to reveal
  .addTo(controller);


// build scene
new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0.9, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
  .setClassToggle("#reveal2", "visible") // add class to reveal
  .addTo(controller);

// Media queries

var md = window.matchMedia("(max-width: 992px)");
var sm = window.matchMedia("(max-width: 692px)");

const medium = (md) => {
  if (md.matches) {
    standImg.src = "./ASSETS/jpeg/165_design_hero__b1s6t07doqj6_small.jpg"
    appsTop1.src = "./ASSETS/png/104_apps_top_1__ex9jvxybnhm6_medium.png";
    appsTop2.src = "./ASSETS/png/091_apps_top_2__gfbyc2ocle2q_medium.png";
    appsTop3.src = "./ASSETS/png/119_apps_top_3__dy5dooarc1km_medium.png";
    appsMiddle.src = "./ASSETS/png/081_apps_middle_base__cwf2r0yp6cqe_medium.png";
    appsBottom1.src = "./ASSETS/png/086_apps_bottom_1__doob1p0g3gk2_medium.png";
    appsBottom2.src = "./ASSETS/png/130_apps_bottom_2__ddvs82ggppyu_medium.png";
    appsBottom3.src = "./ASSETS/png/115_apps_bottom_3__fxwuekyzsieu_medium.png";
    env.src = "./ASSETS/png/189_environment__em2kqpmluqmq_medium.png";
  }
}

const small = (sm) => {
  if (sm.matches) {
    heroImg.src = "./ASSETS/jpeg/036_hero_endframe__fpycn08d62ai_small.jpg";
    sideStand.src = "./ASSETS/jpeg/037_color_side_green__bjxhwofb06b6_small.jpg";
    designStand.src = "./ASSETS/jpeg/221_design_stand__fkr0lztq4amy_small.jpg";
  }
}

medium(md);
small(sm);

md.addEventListener("change", () => {
  medium(md);
})

sm.addEventListener("change", () => {
  small(sm);
})