const todd = document.querySelector("#btnMoveMe");
// const todd ={x:0,y:0,ele:{}}
const pos = { x: 0, y: 0 }; // Initialize position object

const move = () => {
  todd.style.translate = `${pos.x}px ${pos.y}px`;
};

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

// InnerHeight and InnerWidth shows window size for collision. DO NOT HARDCODE.
// x horisontalt   y vertikalt - Less than <, greater than >
window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            //console.log('Up arrow key pressed');
            //todd.style.top =parseInt(todd.style.top) - moveBy +'px';
            pos.y -=10
            console.log(pos);
            move()
              if (pos.y < 0) {
                pos.y=0 
              
               move()
               console.log("Stop going up.")
             }
            break;
        case 'ArrowDown':
            pos.y +=10
            console.log(pos);
            move()
            break;
        case 'ArrowLeft':
            pos.x -=10
            console.log(pos);
            move()
            if (pos.x < 0) {
              pos.x=0 
             move()
             console.log("Stop going left.")
           } else if (pos.x <0 && pos.y < 0) {
            pos.x = 0
            pos.y = 0
            move()
            console.log("Why?")
           }
            break;
        case 'ArrowRight':
            pos.x +=10
            console.log(pos);
            move()
            break;
    }
});


// moves todd to the clicked position - lent from Hector

// x horisontalt   y vertikalt - Less than <, greater than >
addEventListener("click", (toddTest) => {
  // Get click coordinates
  pos.x = toddTest.clientX - todd.offsetWidth / 2;
  pos.y = toddTest.clientY - todd.offsetHeight / 2;
   if (pos.y < 0 && pos.x >=0 || pos.x+165 > innerWidth && pos.y < 0 ) {
      pos.y=0 
  
    move()
    console.log("Stop going up.")
  }  else if (pos.x < 0 && pos.y >=0) {
    pos.x=0 

  move()
  console.log("Stop going left.")
}else if (pos.x < 0 && pos.y < 0) {
    pos.x = 0
    pos.y = 0
    move()
    console.log("Why?")
   } else if (pos.x+165 > innerWidth && pos.y+165 > innerHeight) {
    pos.x = innerWidth -165
    pos.y = innerHeight - 165
    move()
    console.log("You can't escape.")
   } else if (pos.x+165 < innerWidth && pos.y+165 > innerHeight) {
    pos.y = innerHeight - 165
    move()
    console.log("No going down.")
   } else if (pos.x+165 > innerWidth && pos.y+165 < innerHeight) {
    pos.x = innerWidth - 165
    move()
    console.log("Stop going right.")
   } else if (pos.x+165 > innerWidth && pos.y < 0) {
    pos.x = innerWidth -165
    pos.y = 0
    move()
    console.log("North East, no.")
  }
  move();
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


// move player
// if x less than border
// do something
// if y less than border
// do something