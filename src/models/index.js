
function DrawFarm() {
    let mainBlock = document.querySelector(".Farm");
    let block;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            block = document.createElement('div');
            block.classList.add("gameCell");

            mainBlock.appendChild(block);
        }
    }
}

DrawFarm();

const img = ['cow', 'dirt', 'pig', 'plant'];
let square = document.querySelectorAll('.gameCell')

console.log(square);

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

square.forEach(function (element) {
    let randNum = random(0, img.length - 1);
    console.log(randNum);
    element.classList.add(img[randNum]);
})