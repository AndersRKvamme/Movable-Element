const todd = document.querySelector("#btnMoveMe");
const weaponWornSword = document.querySelector("#wornSword")
// const todd ={x:0,y:0,ele:{}}

const pos = { x: 0, y: 0 }; // Initialize position object
let weapon = 0;
let toddSize = 165

let weaponWornSwordPos = {x: 550, y: 550};
console.log(weaponWornSwordPos)

const bandit = document.querySelector("#bandit")

let banditPos = {x: 200 , y: 550};

bandit.style.translate = `${banditPos.x}px ${banditPos.y}px`;

weaponWornSword.style.translate = `${weaponWornSwordPos.x}px ${weaponWornSwordPos.y}px`;

const move = () => {
  todd.style.translate = `${pos.x}px ${pos.y}px`;
if (weapon === 0 && collionSword()) {
  equipWeapon()
} else if (weapon === 1){
  weaponWornSword.style.translate = `${pos.x+93}px ${pos.y+72}px`;
} else if (collisionBandit()){
console.log("Scary");

}

else {

}
};

function frame() {
  if (weaponWornSwordPos == pos.x+93) {
    clearInterval(weaponWornSword);
  } else {
    weaponWornSwordPos++; 
    weaponWornSword = setInterval(frame, 5);
    weaponWornSword.style.translate = `${pos.x+toddSize}px ${weaponWornSwordPos.y+toddSize}px`;
    weaponWornSword.style.translate = `${pos.x+toddSize}px ${weaponWornSwordPos.y+toddSize+72}px`;
    clearInterval(weaponWornSword)
  }
}
const toddBigger = 5

let toddHealth = 20
let toddDamage = 5
let banditHealth = 20
let banditDamage = 7

function equipWeapon() {
  if (weapon === 1) {
    console.log("Todd can't use two weapons (yet?).")
    console.log(weapon)
  } else if (weapon === 0){
    toddDamage +=5;
    weapon +=1
    console.log("Todd is now wielding a worn sword.")
    console.log(weapon)
  }
}
 
// InnerHeight and InnerWidth shows window size for collision. DO NOT HARDCODE.
// x horisontalt   y vertikalt - Less than <, greater than >

function collionSword() {
  if ( weapon === 0 &&
      pos.x + toddSize-8 >=weaponWornSwordPos.x &&
      pos.x <= weaponWornSwordPos.x + 78 &&
      pos.y + toddSize-8 >=weaponWornSwordPos.y &&
      pos.y <= weaponWornSwordPos.y + 88
  ){       
  equipWeapon()
} else if (weapon ===1) {
  console.log("Already has the Sword.");
  
}

else {
  console.log("Not touching sword.")
}
}

// InnerHeight and InnerWidth shows window size for collision. DO NOT HARDCODE.
// x horisontalt   y vertikalt - Less than <, greater than >

// if pos.x >= banditPos.x && pos.y >= banditPos.y && pos.y <= banditPos.y+72 

function collisionBandit() {
  if (
      pos.x + toddSize-8 >=banditPos.x &&
      pos.x <= banditPos.x + 78 &&
      pos.y + toddSize-8 >=banditPos.y &&
      pos.y <= banditPos.y + 88
  ){ 
console.log("I didn't buy Skyrim.");
return true

}else {
console.log("no");
return false
}}

function collisionUnit () {
  if (collisionBandit()) {
    console.log("Crashing!");
    return true 
  } else { 
return false
  }
}

function toddReset() {
  toddSize = 165;
  toddSize-toddSize
  todd.style.width = `${toddSize}px`
  boundsHeight()
  boundsWidth()
}




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
    //console.log("Not out of Bounds Widthwise.");
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
    //console.log("Not out of Bounds Heightwise");
  }
}

let moveBy = 10;

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
       break;
    }  break;
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
          if (collisionUnit()== false){
            pos.y -=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth() 
            break;}
          else if (collisionUnit()== true){
            pos.y = banditPos.y + 90
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
          break;
          } else {
            break;
          }
          
        case 'ArrowDown':
          if (collisionUnit()== false){
            pos.y +=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;}
          else if (collisionUnit()== true){
            pos.y = pos.y-10
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
          break;
          } else {
            break;
          }
          
        case 'ArrowLeft':
          if (collisionUnit()== false){
            pos.x -=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;}
            else if (collisionUnit()== true){
              pos.x = banditPos.x+80
              console.log(pos);
              move()
              boundsHeight()
              boundsWidth()
            break;
            } else {
              break;
            }
        case 'ArrowRight':
          if (collisionUnit()== false){
            pos.x +=moveBy
            console.log(pos);
            move()
            boundsHeight()
            boundsWidth()
            break;}
            else if (collisionUnit()== true){
              pos.x = banditPos.x-20
              console.log(pos);
              move()
              boundsHeight()
              boundsWidth()
            break;
            } else {
              break;
            }
            case 'q':
              //Move weapon around Todd before resetting
              weaponWornSword = setInterval(frame, 5);
              weaponWornSword.style.translate = `${pos.x+toddSize}px ${weaponWornSwordPos.y+toddSize}px`;
              weaponWornSword.style.translate = `${pos.x+toddSize}px ${weaponWornSwordPos.y+toddSize+72}px`;
              console.log("ATTACK!");
              
            break;
          
            case 'e': 
              break;
          }
});

// - 

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