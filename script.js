
function createGrid() {

    let gridSize = +prompt("How many grids (0-100) you need in a row:")

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
    let divs = document.querySelectorAll('.divs');
    divs.forEach(divs => {
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = 'rgb(1, 115, 255)'
        })
    })
}


