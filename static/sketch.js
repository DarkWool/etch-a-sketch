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

// Clean the whole grid (delete all divs)
function cleanGrid() {
	sketch.innerHTML = '';
}

// Show / Hide Grid
let showGrid = document.getElementById('show');
showGrid.addEventListener('change', hideGrid);

function hideGrid() {
	for (let child of children) {
		child.classList.toggle('showGrid');
	}
}

// Change the Grid/Sketch size.
let rgbMode = false;
let solidMode = true;
let colorPicker = document.getElementById('picker');

// Set a button to 'active' and determine which mode of color is currently selected.
let mainButtons = document.getElementById('grid-controls').getElementsByTagName('button');
let activeButton = mainButtons[0];
for (let button of mainButtons) {
	if (button.id !== 'reset') {
		button.addEventListener('click', (e) => {
			if (activeButton !== e.target) {
				activeButton.classList.remove('active');
				activeButton = e.target;
				e.target.classList.add('active');
			}

			if (e.target.id === 'rgb') {
				rgbMode = true;
				solidMode = false;
			} else if (e.target.id === 'solid') {
				rgbMode = false;
				solidMode = true;
			} else {
				rgbMode = false;
				solidMode = false;
			}
		});
	}
}

let gridSize = document.getElementById('grid-size');
gridSize.addEventListener('change', createGrid);

function createGrid(e) {
	cleanGrid();

	sketch.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows: repeat(${gridSize.value}, 1fr);`;

	let totalDivs = gridSize.value * gridSize.value;

	if (showGrid.checked) {
		for (let i = 0; i < totalDivs; i++) {
			let newDiv = document.createElement('div');
			newDiv.classList.add('showGrid');
			newDiv.addEventListener('mouseover', (e) => {
				if (rgbMode) {
					e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
				} else if (solidMode) {
					e.target.style.backgroundColor = colorPicker.value;
				} else {
					e.target.removeAttribute('style', '');
				}
			});
			sketch.append(newDiv);
		}
	} else {
		for (let i = 0; i < totalDivs; i++) {
			let newDiv = document.createElement('div');
			newDiv.addEventListener('mouseover', (e) => {
				if (rgbMode) {
					e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
				} else if (solidMode) {
					e.target.style.backgroundColor = colorPicker.value;
				} else {
					e.target.removeAttribute('style', '');
				}
			});
			sketch.append(newDiv);
		}
	}
}

createGrid();