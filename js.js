const todd = document.querySelector("#btnMoveMe");
// const todd ={x:0,y:0,ele:{}}
const pos = { x: 0, y: 0 }; // Initialize position object

const move = () => {
  todd.style.translate = `${pos.x}px ${pos.y}px`;
};
const toddBigger = 5
 
function toddReset() {
  toddSize = 165;
  toddSize-toddSize
  todd.style.width = `${toddSize}px`
  boundsHeight()
  boundsWidth()
}

let toddSize = 165
todd.style.width = `${toddSize}px`
function boundsWidth() {
  if (pos.x < 0) {
    pos.x = 0
    move()
    console.log("Attempted to move to the left of the window.");
  } else if (pos.x > innerWidth-toddSize) {
      pos.x = innerWidth-toddSize
      move()
      console.log("Attempted to move to the right of the window.")
  } else {
    console.log("Not out of Bounds Widthwise.");
  } 
}
function toddPluss () {
  toddSize = toddSize+toddBigger
  todd.style.width = `${toddSize}px`
  boundsHeight()
  boundsWidth()
}
function toddMinus () {
  toddSize = toddSize-toddBigger
  todd.style.width = `${toddSize}px`
}

function boundsHeight() {
  if (pos.y < 0) {
    pos.y = 0
    move()
    console.log("Attempted to move below 0.")
  } else if (pos.y > innerHeight-toddSize){
    pos.y = innerHeight-toddSize
    move()
    console.log("Attempted to move below window.")
  } else {
    console.log("Not out of Bounds Heightwise");
  }
}

let moveBy = 10;

todd.addEventListener("click", () =>{
    test()
})

window.addEventListener('load', ()=> {
    todd.style.position = 'absolute';
    todd.style.left = 0;
    todd.style.top = 0;
})

function test() {
    console.log("Moved") 
}

console.log(innerHeight)
console.log(innerWidth)
if (pos.y < 0) {
  pos.y+=10
  move()
}

window.addEventListener ("keydown", function(event) {
  switch (event.key) {
    case '+':
     toddPluss()
     console.log("Todd is growing.")
     console.log(toddSize)
     if (toddSize > innerHeight-5) {
      console.log("Todd is too big.");
      toddMinus()
     }
     break;
  case '-':
    toddMinus()
    console.log("Todd is shrinking.")
    console.log(toddSize)
        if (toddSize <10) {
      console.log("Todd is too small.")
      toddPluss()
    }  
    break;
    case 'r':
      console.log("Todd has been reset to his original size.");
        toddReset ()
      break;
  }});

// InnerHeight and InnerWidth shows window size for collision. DO NOT HARDCODE.
// x horisontalt   y vertikalt - Less than <, greater than >
window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            pos.y -=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;
        case 'ArrowDown':
            pos.y +=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;
        case 'ArrowLeft':
            pos.x -=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;
        case 'ArrowRight':
            pos.x +=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;
    }
});


// moves todd to the clicked position - lent from Hector

// x horisontalt   y vertikalt - Less than <, greater than >
addEventListener("click", (toddTest) => {
  // Get click coordinates
  pos.x = toddTest.clientX - todd.offsetWidth / 2;
  pos.y = toddTest.clientY - todd.offsetHeight / 2;
  boundsHeight()
  boundsWidth()
  move()
});

let isMoving = false
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);
window.addEventListener('mousemove', mouseMoveHandler);
function mouseDownHandler(e) {
  e.preventDefault()
isMoving = true
}

function mouseUpHandler() {
  isMoving = false
}

function mouseMoveHandler(e) {

  if (isMoving) {
    pos.x = e.clientX - todd.offsetWidth / 2;
    pos.y = e.clientY - todd.offsetHeight / 2;
    move()
  }
}




// remaining, funksjon
// move player
// if x less than border
// do something
// if y less than border
// do something