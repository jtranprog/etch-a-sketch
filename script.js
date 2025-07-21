const container = document.querySelector('.container');

function makeGrid(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            container.appendChild(cell);

        }
    }
}

makeGrid(16);

