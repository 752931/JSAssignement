// Vi skapar en asynkron funktion
(async function () {

  // Här anger du ditt sökord för API:et — byt ut "Arrabiata" till det du vill söka efter
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=beef";

  try {
    // Hämtar informationen från API:et via fetch
    const res = await fetch(url);

    // Omvandlar svaret till JSON
    const data = await res.json();

    // Sparar listan av måltider i en variabel
    const meals = data.meals ?? [];

    // Om inga måltider skulle hittas,så skriv ut ett meddelande och avsluta
    if (meals.length === 0) {
      console.log("Inga måltider hittades.");
      return; // Avslutar funktionen
    }

    //  Första 5 måltidsnamnen i alfabetisk ordning

    // Kopierar listan, sorterar alfabetiskt efter namn, tar de 5 första, och skriver ut bara namnet
    const firstFiveNames = [...meals]
      .sort((a, b) => a.strMeal.localeCompare(b.strMeal)) // sorterar efter strMeal
      .slice(0, 5) // tar de första 5 bara
      .map(m => m.strMeal); // hämtar bara måltidsnamnet


    console.log("1) Första 5 måltidsnamn (A–Ö):", firstFiveNames);

    // Filtrera efter given kategori

    // Här anges den kategori du vill filtrera efter (detta kan ändras)
    const givenCategory = "Pasta";

    // Här så filtreras alla måltider som matchar med kategorin
    const filteredByCategory = meals
      .filter(m => (m.strCategory || "").toLowerCase() === givenCategory.toLowerCase())
      .map(m => ({ name: m.strMeal, category: m.strCategory })); // Returnerar bara namn och kategori

    // Här skrivs de måltider som matchar kategorin
    console.log(`2) Måltider i kategori "${givenCategory}":`, filteredByCategory);

    // Här så räknas hur många måltider som finns i varje kategori

    // Här så använder vi reduce() för att bygga upp ett objekt med kategorier och antal
    const categoryCounts = meals.reduce((acc, meal) => {
      const cat = meal.strCategory || "Okänd"; // hämtar kategorin, annars "Okänd"
      acc[cat] = (acc[cat] || 0) + 1; // ökar räknaren med 1 för varje gång kategorin träffas
      return acc; // returnerar det uppdaterade objektet
    }, {}); // börjar med ett tomt objekt {}


    console.log("3) Antal måltider per kategori:", categoryCounts);

  } catch (err) {
    // Om något går fel vid hämtning eller bearbetning visas felmeddelande här
    console.error("Något gick fel vid hämtning eller bearbetning:", err);
  }

})(); // Här körs funktionen direkt.
