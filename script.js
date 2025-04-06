let mainContainer = document.getElementById("container");
const CONTAINER_SIZE = 800;

function makeGrid(dimension){

    let volume = dimension * dimension;
    let size = CONTAINER_SIZE / dimension;

    for(let i = 0; i < volume; i++){
        let div = document.createElement('div');
        div.style.float = "left";
        div.style.width = size + "px";
        div.style.height = size + "px";
        div.classList.add("gridBlock");
    
        div.addEventListener("mouseover", function(event){

            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            event.target.style.backgroundColor = `rgb(${r},${b},${g})`;
        });
        mainContainer.appendChild(div);
    }
}

function resetDiv(){
    let grid = document.querySelectorAll("div.gridBlock");
    grid.forEach(function(div) {
        div.parentNode.removeChild(div);
    })

    let newSize = prompt("Введите новый размер для сетки");
    makeGrid(newSize);
}

makeGrid(16);
