let i = 0;
let facts = [
  "Digital Arts and Sciences Engineer",
  "Full-Stack Developer",
  "Scrum Master",
  "Google SPS Alumni! >:)",
];
let txt = "I'm a " + facts[0];
let speed = 75;
let backspace = false;
let blinkCursor = true;

window.onload = function () {
  typeFact();
};

/*This function gets called when the user presses the intro button*/
function typeButton() {
  i = 0;
  txt = "I'm a " + facts[Math.floor(Math.random() * facts.length)];
  backspace = false;
  typeFact();
}

/*This function adds a single character to the displayed message until complete
and then reverses that process*/
function typeFact() {
  if (i <= txt.length && !backspace) {
    document.getElementById("typed").innerHTML = txt.substring(0, i);
    i++;
    if (i === txt.length) {
      backspace = true;
    } else {
      setTimeout(typeFact, speed);
    }
  }
  if (backspace) {
    if (i >= 0) {
      document.getElementById("typed").innerHTML = txt.substring(0, i);
      i--;
      setTimeout(typeFact, speed);
    }
  }
}

//This function creates the blinking cursor
setInterval(() => {
  if (blinkCursor) {
    document.getElementById("cursor").style.opacity = 0;
    blinkCursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    blinkCursor = true;
  }
}, speed * 5);
