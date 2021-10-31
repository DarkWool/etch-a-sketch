let sketch = document.getElementById('sketch');
let children = sketch.children;

// Reset the grid to blank squares.
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
	for (let child of children) {
		child.removeAttribute('style', '');
	}
}

function cleanGrid() {
	sketch.innerHTML = '';
}

// Change the Grid/Sketch size.
let gridSize = document.getElementById('grid-size');
gridSize.addEventListener('change', createGrid);

function createGrid(e) {
	cleanGrid();

	sketch.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows: repeat(${gridSize.value}, 1fr);`;

	let totalDivs = gridSize.value * gridSize.value;

	for (let i = 0; i < totalDivs; i++) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('showGrid');
		newDiv.addEventListener('mouseover', (e) => {
			console.log(e);
		});
		sketch.append(newDiv);
	}
}

createGrid();