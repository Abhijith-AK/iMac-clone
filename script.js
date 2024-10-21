const video = document.querySelector('.hero-video');
const image = document.querySelector('.hero-img');

const links = document.querySelectorAll('.head1 a');
const hoverDiv = document.querySelector('.hover-div');
const hoverBoxes = document.querySelectorAll('.hoverBox');

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