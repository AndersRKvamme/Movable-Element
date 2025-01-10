const todd = document.querySelector("#btnMoveMe");
// const todd ={x:0,y:0,ele:{}}

let moveBy = 10;

todd.addEventListener("click", () =>{
    test()
})

todd.addEventListener("onkeydown", () =>{
    testArrow()
})

window.addEventListener('load', ()=> {
    todd.style.position = 'absolute';
    todd.style.left = 0;
    todd.style.top = 0;
})

function test() {
    console.log("test")
}

console.log(innerHeight)
console.log(innerWidth)
// InnerHeight and InnerWidth shows window size for collision. DO NOT HARDCODE.

window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            todd.style.top =parseInt(todd.style.top) - moveBy +'px';
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            todd.style.top =parseInt(todd.style.top) + moveBy +'px';
            break;
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            todd.style.left =parseInt(todd.style.left) - moveBy +'px';
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            todd.style.left =parseInt(todd.style.left) + moveBy +'px';
            break;
    }
});

todd.addEventListener('mousedown', mouseDownHandler);
todd.addEventListener('mouseup', mouseUpHandler);
todd.addEventListener('mousemove', mouseMoveHandler);

let offsetX, offsetY, drag = false;

function mouseDownHandler(e) {
    e.preventDefault()
  drag = true;
  offsetX = e.clientX - todd.getBoundingClientRect().left;
  offsetY = e.clientY - todd.getBoundingClientRect().top;
  todd.addEventListener('mousemove', mouseMoveHandler);
}

function mouseUpHandler() {
  drag = false;
  todd.removeEventListener('mousemove', mouseMoveHandler);
}

function mouseMoveHandler(e) {
  if (drag) {
    todd.style.left = `${e.clientX - offsetX}px`;
    todd.style.top = `${e.clientY - offsetY}px`;
  }
}
