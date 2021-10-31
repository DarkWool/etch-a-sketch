// Main elements
let sketch = document.getElementById('sketch');
let children = sketch.children;

let mainButtons = document.getElementById('grid-controls').getElementsByTagName('button');
let activeButton = mainButtons[0];

let colorPicker = document.getElementById('picker');
let resetBtn = document.getElementById('reset');
let showGrid = document.getElementById('show');
let gridSize = document.getElementById('grid-size');

// Color modes
let solidMode = true;
let rgbMode = false;

// Event Listeners
resetBtn.addEventListener('click', resetGrid);
showGrid.addEventListener('change', showHideGrid);
gridSize.addEventListener('change', createGrid);

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

// Functions
function createGrid() {
	cleanGrid();

	sketch.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows: repeat(${gridSize.value}, 1fr);`;

	let totalDivs = gridSize.value * gridSize.value;

	if (showGrid.checked) {
		for (let i = 0; i < totalDivs; i++) {
			let newDiv = document.createElement('div');
			newDiv.classList.add('showGrid');
			newDiv.addEventListener('mouseover', switchColorModes);
			sketch.append(newDiv);
		}
	} else {
		for (let i = 0; i < totalDivs; i++) {
			let newDiv = document.createElement('div');
			newDiv.addEventListener('mouseover', switchColorModes);
			sketch.append(newDiv);
		}
	}
}

function switchColorModes(e) {
	if (rgbMode) {
		e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
	} else if (solidMode) {
		e.target.style.backgroundColor = colorPicker.value;
	} else {
		e.target.removeAttribute('style', '');
	}
}

function resetGrid() {
	for (let child of children) {
		child.removeAttribute('style', '');
	}
}

function showHideGrid() {
	for (let child of children) {
		child.classList.toggle('showGrid');
	}
}

function cleanGrid() {
	sketch.innerHTML = '';
}

createGrid();