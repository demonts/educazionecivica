// script.js

// Funzione per caricare le immagini in modo casuale
function loadImages() {
  const realImages = ['real/image1.jpg', 'real/image2.jpg', 'real/image3.jpg'];
  const fakeImages = ['fake/image1.jpg', 'fake/image2.jpg', 'fake/image3.jpg'];

  // Scegli un'immagine vera e una falsa in modo casuale
  const realImage = realImages[Math.floor(Math.random() * realImages.length)];
  const fakeImage = fakeImages[Math.floor(Math.random() * fakeImages.length)];

  // Posizione casuale delle immagini
  const isRealOnLeft = Math.random() < 0.5;

  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');

  // Assegna le immagini alla loro posizione casuale
  if (isRealOnLeft) {
    img1.src = realImage;
    img2.src = fakeImage;
    correctAnswer = "img1";
  } else {
    img1.src = fakeImage;
    img2.src = realImage;
    correctAnswer = "img2";
  }
}

// Variabile per memorizzare la risposta corretta
let correctAnswer = "";

// Funzione per verificare la risposta dell'utente
function checkAnswer() {
  const userAnswer = document.querySelector('input[name="image-choice"]:checked')?.value;

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = "Risposta corretta!";
  } else {
    document.getElementById('result').textContent = "Risposta sbagliata, riprova!";
  }

  // Ricarica le immagini per il prossimo tentativo
  setTimeout(loadImages, 2000);  // Ricarica le immagini dopo 2 secondi
}

// Carica le immagini iniziali quando la pagina è caricata
window.onload = loadImages;
