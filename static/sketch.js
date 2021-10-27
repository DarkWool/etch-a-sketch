// ----- Floats method:

// let container = document.getElementById('container');

// let multiple = 1;

// Create 16 divs for the page.
// for (let i = 0; i < 256; i++) {
//     const div = document.createElement('div');
    
//     if (i === multiple) {
//         div.classList.add('f-lineBreak');
//         multiple += 16;
//     }

//     container.append(div.cloneNode());
// }

// ----- inline-block method:
/*
let container = document.getElementById('container');

const div = document.createElement('div');
div.classList.add('ib');

let n = 15;
for (let i = 0; i < 256; i++) {
    if (i === n) {
        n += 16;
    }
    
    container.append(div.cloneNode());
}
*/


// 4. CSS GRID.
// let container = document.getElementById('container');
// for (let i = 0; i < 256; i++) {
    // let div = document.createElement('div');
    // div.addEventListener('mouseover', (e) => {
        // e.target.style.backgroundColor = random.value;
    // })
    // container.append(div);
// }
// 
// 
// while (children) {
    // }
    //     children[0].remove();
    // Array.from(children).forEach(child => child.remove());
    // container.innerHTML = '';

function createGrid(e) {
    cleanGrid();

    console.log(e);

    container.style.cssText = `grid-template-columns: repeat(${range.value}, 1fr); grid-template-rows: repeat(${range.value}, 1fr);`;

    let totalDivs = range.value * range.value;

    for (let i = 0; i < totalDivs; i++) {
        let newDiv = document.createElement('div');

        newDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colorPicker.value;
        })

        container.append(newDiv);
    }
}

// Reset the grid to blank.
let children = container.children;

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);


function cleanGrid() {
    container.innerHTML = '';
}

function reset() {
    for (let child of children) {
        child.removeAttribute('style', '');
    }
}

let colorPicker = document.getElementById('picker');

let range = document.getElementById('grid-size');
range.addEventListener('change', createGrid);