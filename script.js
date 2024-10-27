const video = document.querySelector('.hero-video');
const image = document.querySelector('.hero-img');

const hero = document.getElementById('hero');
const desc = document.getElementById('desc');

const links = document.querySelectorAll('.head1 a');
const hoverDiv = document.querySelector('.hover-div');
const hoverBoxes = document.querySelectorAll('.hoverBox');
const heroImg = document.getElementById("heroImg");
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

var sm = window.matchMedia("(max-width: 692px)");
var md = window.matchMedia("(max-width: 992px)");
var lg = window.matchMedia("(min-width: 1380px)")


AOS.init();
// init controller
var controller = new ScrollMagic.Controller();

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
  if (lg.matches) {
    const target = document.querySelector('.aa');
    const target2 = document.querySelector('.ab');
    const target3 = document.querySelector('.ac');

    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    // First observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Second observer
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate2');
          observer2.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Third observer
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate3');
          observer3.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(target);
    observer2.observe(target2);
    observer3.observe(target3);
  }
});


if (sm.matches) {
  desc.style.marginTop = hero.offsetHeight + heroImg.offsetHeight + 50 + 'px';
} else if (md.matches) {
  desc.style.marginTop = hero.offsetHeight + 400 + 'px';
} else {
  desc.style.marginTop = hero.offsetHeight + 'px'
}

// Media queries

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
    appsTop1.src = "./ASSETS/png/057_apps_top_1__ex9jvxybnhm6_small.png";
    appsTop2.src = "./ASSETS/png/048_apps_top_2__gfbyc2ocle2q_small.png";
    appsTop3.src = "./ASSETS/png/075_apps_top_3__dy5dooarc1km_small.png";
    appsMiddle.src = "./ASSETS/png/090_apps_middle_base__cwf2r0yp6cqe_small.png";
    appsBottom1.src = "./ASSETS/png/069_apps_bottom_1__doob1p0g3gk2_small.png";
    appsBottom2.src = "./ASSETS/png/131_apps_bottom_2__ddvs82ggppyu_small.png";
    appsBottom3.src = "./ASSETS/png/151_apps_bottom_3__fxwuekyzsieu_small.png";
    // desc.style.marginTop = hero.offsetHeight + heroImg.offsetHeight + 'px';
  }
}

small(sm);
medium(md);

md.addEventListener("change", () => {
  medium(md);
})

sm.addEventListener("change", () => {
  small(sm);
})

links.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    hoverBoxes.forEach(box => box.classList.remove('active'));

    const targetId = event.currentTarget.id;

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

if (lg.matches) {
  var scaletext = document.getElementById('scale');
  document.addEventListener('scroll', () => {

    const textElement = document.querySelector('.scaling-text1');
    const scrollAmount = window.scrollY;

    const minFontSize = .1;
    const maxFontSize = 5;

    const fontSize = Math.max(maxFontSize - scrollAmount * 0.001, minFontSize);

    textElement.style.scale = fontSize;
  })


  const textItems = document.querySelectorAll('.m3details .item');
  const imageItems = document.querySelectorAll('.sideMacSec .item');
  let currentIndex = 0;
  const startScrollPos = 17500;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > startScrollPos) {
      const adjustedScrollPos = scrollPos - startScrollPos;

      const newIndex = Math.min(Math.floor(adjustedScrollPos / 400), textItems.length - 1);

      if (newIndex !== currentIndex) {
        textItems[currentIndex].classList.remove('active');
        imageItems[currentIndex].classList.remove('active');

        currentIndex = newIndex;

        textItems[currentIndex].classList.add('active');
        imageItems[currentIndex].classList.add('active');
      }
    }
  });

}
