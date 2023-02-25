const SKETCH = document.getElementById("sketch")
const SIZE = document.getElementById("size")
const SIZE_DISPLAY = document.getElementById("size-disp")
const CLEAR = document.getElementById("clear")

const random = num => Math.floor(Math.random() * num)

let gridSize, tileCount, holdClick = false, mode;
function changeColor(el) {
    mode = document.querySelectorAll("input[name=mode]:checked")
    if(holdClick) {
        if(mode[0].id == "color-mode") {
            el.style.background = 'black'
        } else {
            el.style.background = `rgb(${random(256)}, ${random(256)}, ${random(256)})`
        }
    }
}

function updateSketch() {
    SKETCH.innerHTML = ''
    gridSize = SIZE.value;
    tileCount = gridSize * gridSize;
    SKETCH.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
    SKETCH.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    SIZE_DISPLAY.innerText = `${SIZE.value} x ${SIZE.value}`

    for(let i = 0; i < tileCount; i++) {
        let div = document.createElement("div")
        div.classList.add("tile")
        div.addEventListener("mouseover", function() {changeColor(this)})
        div.addEventListener("mousedown", function() {
            holdClick = true;
            changeColor(this)
        })
        div.addEventListener("mouseup", function() {holdClick = false;})
        SKETCH.appendChild(div)
    }
}
updateSketch()
SIZE.addEventListener("change", updateSketch)
CLEAR.addEventListener("click", updateSketch)