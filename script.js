//funzione per indice random da 1 a 100
function rndIndex() {
  return Math.floor(Math.random() * 100) + 1;
}

window.onload = () => {
    const leftImg = document.getElementById("img-left");
    const rightImg = document.getElementById("img-right");
    const risultato = document.getElementById("risultato");
    const riprova = document.getElementById("riprova");

    const fakeIndex = rndIndex();
    const realIndex = rndIndex();

    const fakePath = `foto/fake/f${fakeIndex}.jpeg`;
    const realPath = `foto/real/r${realIndex}.jpeg`;

    //sceglie dove va l'immagine
    const isRealOnLeft = Math.random() < 0.5;

    if (isRealOnLeft){
        leftImg.src = realPath;
        rightImg.src = fakePath;
    } else{
        leftImg.src = fakePath;
        rightImg.src = realPath;
    }

    //disabilita clic
    function disabilitaClick() {
      leftImg.style.pointerEvents = "none";
      rightImg.style.pointerEvents = "none";
    }

    //mostra ris e evidenzia immagine
    function mostraRisultato(corretta, cliccata) {
      if (corretta) {
        risultato.textContent = "Congratulazioni, hai capito qual'era l'immagine corretta!";
        risultato.style.color = "limegreen";
      } else {
        risultato.textContent = "Mi spiace, l'IA ti ha ingannato!";
        risultato.style.color = "red";
        //evidenzia corretta
        if (isRealOnLeft) {
          leftImg.style.border = "5px solid limegreen";
        } else {
          rightImg.style.border = "5px solid limegreen";
        }
      }

        //evidenzio immagine cliccata
        cliccata.style.border = corretta ? "5px solid limegreen" : "5px solid red";

        disabilitaClick();
        riprova.style.display = "inline-block";
    }

    //gestione clic
    leftImg.addEventListener("click", () => {
      mostraRisultato(isRealOnLeft, leftImg);
    });

    rightImg.addEventListener("click", () => {
      mostraRisultato(!isRealOnLeft, rightImg);
    });

    //clic pulsante riprova
    riprova.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}; 