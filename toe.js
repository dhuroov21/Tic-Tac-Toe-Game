let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let Msg = document.querySelector('.msg');
let closeBtn = document.querySelector('.closeBtn');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
    });
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const reset = () => {
    turn0 = true;
    enableBoxes();
    Msg.classList.add('hide');
    closeBtn.classList.add('hide');
};

boxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
        console.log('Box clicked', idx);
        if (turn0) {
            box.textContent = 'O';
            turn0 = false;
        } else {
            box.textContent = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    Msg.innerText = `${winner} is the Winner!`;
    Msg.classList.remove('hide');
    closeBtn.classList.remove('hide');
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if (a !== '' && a === b && b === c) {
            showWinner(a);
            return;
        }
    }
    // check for draw
    let isDraw = Array.from(boxes).every((b) => b.innerText !== '');
    if (isDraw) {
        Msg.innerText = `It's a draw!`;
        Msg.classList.remove('hide');
        closeBtn.classList.remove('hide');
    }
};

resetButton.addEventListener('click', reset);
closeBtn.addEventListener('click', reset);







