// dichiaro e assegno costante contenitore delle card
const cardContainer = document.getElementById("card-container");

// ciclo for dove eseguire le iterazioni, controlli e stampa
for (let i = 1; i <= 100; i++) {
  // inizializzo le mie varibiali che mi stamperanno il risultato e la classe con la quale assegnerò i bgcolor
  let fizzPrint = 0;
  let fizzClass = "";
  // creiamo il contenitore dove andremo ad inserire le nostre card
  const fizzCol = document.createElement("div");
  fizzCol.classList.add("col");
  // inseriamo nell'HTML la col
  cardContainer.append(fizzCol);

  // verifica sul contatore
  if (i % 15 == 0) {
    fizzPrint = "FIZZBUZZ";
    fizzClass = "fizzbuzz";
  } else if (i % 5 == 0) {
    fizzPrint = "BUZZ";
    fizzClass = "buzz";
  } else if (i % 3 == 0) {
    fizzPrint = "FIZZ";
    fizzClass = "fizz";
  } else {
    fizzPrint = i;
    fizzClass = "number";
  }

  // stampa in HTML le card con all'interno i risultati
  fizzCol.innerHTML += `
    <div class="card ${fizzClass}">
        <div class="card-body">
            ${fizzPrint}
        </div>
    </div>
  `;
}
