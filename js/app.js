const text = document.getElementById('text');
const button1 = document.getElementById('button1');
// Hämtar knappen från HTML-filen med id="button1" och sparar den i variabeln button1
const header = document.getElementById('HH');

header.innerHTML = "Welcome to my site"
text.innerHTML = "Assignment";
button1.innerHTML = "CLICK ME"


button1.addEventListener("click", function() {
// Lägger till en "event listener" som lyssnar efter när någon klickar på knappen
// När knappen klickas körs funktionen inom { }

  if (button1.innerHTML === "Click Me!") {
    // Kollar om texten på knappen just nu är exakt "Click Me!"

    button1.innerHTML = "You clicked me!";
    // Om texten är "Click Me!", ändras den till "You clicked me!"

  } else {
    // Annars – om texten inte är "Click Me!" (t.ex. "You clicked me!")

    button1.innerHTML = "Click Me!";
    // Då ändras texten tillbaka till "Click Me!"
  }

});
// Stänger funktionen och event listenern
