const container = document.querySelector('.container');

function getGrid(size = 16) {
    const totalSquare = size * size;
    for (let i = 0; i < totalSquare; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    });

    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "blue";
    });
    };
};

getGrid();

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    container.textContent = '';
    const size = Number(prompt());
    getGrid(size);
    const pixelSize = 960 / size;
    const square = document.querySelectorAll('.square');
    square.forEach(div => {
        div.style.width = pixelSize + 'px';
        div.style.height = pixelSize + 'px';
    });
});
