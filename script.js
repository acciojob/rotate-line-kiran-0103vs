//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle = (angle + 2) % 360; // Increment angle by 2 degrees and keep it within 0-360 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply rotation
}

// Call rotateLine function every 20 milliseconds
setInterval(rotateLine, 20);
