// Skapa en tom array för att räkna antal
let counts = [];

// Sätt alla startvärden till 0 (för 0 till 9)
for (let i = 0; i < 10; i++) {
  counts[i] = 0;
}

// Rulla 10 000 gånger
for (let i = 0; i < 10000; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  counts[randomNumber] = counts[randomNumber] + 1;
}

// Skriv ut resultatet
for (let i = 0; i < 10; i++) {
  console.log("I rolled " + i + " a total of " + counts[i] + " times.");
}
