// GLOBAL VARIABLES
let divDefaultColor = ' rgb(255, 255, 255)';
<<<<<<< HEAD
let divHoverColor = ' black';
=======
let divHoverColor = 'black';
>>>>>>> 54a4df5 (-Add buttons)
let isRaibowColor = false;
let isSketchOn = false;
let gridSize = 16;

// INPUT GRID SIZE
function changeGrid() {

    gridSize = +prompt("How many box (0-100) you need in a row:");
    createGrid();
}

// CREATE GRID-BOXES TO GRIDSIZE * GRIDSIZE (default 16*16)
function createGrid() {
    if (gridSize <= 100) {
        let containerSize = 400;
        let squareSize = containerSize / gridSize
        let containerDiv = document.querySelector('#container');
        containerDiv.innerHTML = "";
        for (i = 0; i < gridSize * gridSize; i++) {
            let divs = document.createElement('div');
            divs.classList.add('divs')
            divs.style.height = `${squareSize}px`
            divs.style.width = `${squareSize}px`
            containerDiv.appendChild(divs);
        }
    } else {
        alert("Enter a Number Less than 100.")
    }
    defaultHover(); //call function to change color on hover
}
createGrid();
// 
// CHANGE COLOR ON HOVER
function defaultHover() {
    clearGrid()

    let divs = document.querySelectorAll('.divs');
    divs.forEach(divs => {
        divs.innerHTML = ''
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = divHoverColor;

        })
    })
}

// CHANGE GRID COLOR TO DEFAULT
function clearGrid() {
    document.querySelectorAll('.divs').forEach(div => {
        div.style.opacity = '1';
        div.style.backgroundColor = divDefaultColor;
    })
}

// CHANGE MULTI COLOR ON HOVER
function changeToRainbow() {
    clearGrid()
    let divs = document.querySelectorAll('.divs');
    divs.forEach(divs => {
        divs.addEventListener('mouseover', () => {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            divs.style.backgroundColor = color;

        })
    })

}



// MAKE COLOR DARKER ON HOVER
function changeToSketch() {
    clearGrid();
    let divs = document.querySelectorAll('.divs');
    divs.forEach(div => {
        div.style.opacity = '0';
        div.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity < 1) {
                div.style.opacity = (currentOpacity + 0.1).toString(); // Increase opacity by 0.1
            };

        })

    })
}



















