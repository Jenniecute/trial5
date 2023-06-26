// Dynamically create stars across the viewport
function createStars() {
    const numStars = 50; // Adjust the number of stars as needed
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(star);
    }
  }
  
  // Invoke the function to create stars when the page loads
  window.addEventListener('DOMContentLoaded', createStars);

  // Track mouse movement and update custom cursor position
document.addEventListener('mousemove', function(e) {
    const customCursor = document.querySelector('.custom-cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');
  
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
  
    cursorInner.style.animationDuration = Math.random() + 0.5 + 's';
    cursorOuter.style.animationDuration = Math.random() + 0.5 + 's';
  });
  
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
