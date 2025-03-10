function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Vykreslíme len raz
}

function draw() {
  background(220);

  let xoff = 0; // Počiatočný offset pre Perlin noise

  for (let x = 0; x < width; x++) {
    let gray = noise(xoff); // Získaj hodnotu noise pre aktuálny offset
    stroke(gray * 255); // Nastav odtieň šedej
    line(x, height / 2 - 10, x, height / 2 + 10); // Nakresli krátku čiaru
    xoff += 0.005; // Posuň offset o malú hodnotu
  }
}
