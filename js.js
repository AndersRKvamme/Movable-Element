const todd = document.querySelector("#btnMoveMe");

todd.addEventListener("click", () =>{
    test()
})

todd.addEventListener("onkeydown", () =>{
    testArrow()
})

function test() {
    console.log("test")
}

function testArrow() {
    console.log("Arrow")
}

todd.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            break;
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            moveLeft ()
            break;
    }
});

function moveLeft(){
    moveBy(20,40)
}

todd.addEventListener('mousedown', mouseDownHandler);
todd.addEventListener('mouseup', mouseUpHandler);
todd.addEventListener('mousemove', mouseMoveHandler);

let offsetX, offsetY, drag = false;

function mouseDownHandler(e) {
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