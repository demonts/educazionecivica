// Funzione per ottenere un numero casuale tra 1 e 50
function getRandomIndex() {
    return Math.floor(Math.random() * 50) + 1;
}

window.onload = () => {
    const leftImg = document.getElementById("img-left");
    const rightImg = document.getElementById("img-right");

    const fakeIndex = getRandomIndex();
    const realIndex = getRandomIndex();

    const fakePath = `foto/fake/f${fakeIndex}.jpg`;
    const realPath = `foto/real/r${realIndex}.jpg`;

    // Determina casualmente la posizione della foto vera
    const isRealOnLeft = Math.random() < 0.5;

    if (isRealOnLeft) {
        leftImg.src = realPath;
        rightImg.src = fakePath;
    } else {
        leftImg.src = fakePath;
        rightImg.src = realPath;
    }
};
