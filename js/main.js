// dichiaro e assegno costante contenitore delle card
const cardContainer = document.getElementById("card-container");

// ciclo for dove eseguire le iterazioni, controlli e stampa
for (let i = 1; i <= 100; i++) {
  let fizzPrint = 0;
  let fizzClass = "";
  // creiamo il contenitore dove creiamo il container delle card
  const fizzCol = document.createElement("div");
  fizzCol.classList.add("col");

  cardContainer.append(fizzCol);

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

  fizzCol.innerHTML += `
    <div class="card ${fizzClass}">
        <div class="card-body fw-bold">
            ${fizzPrint}
        </div>
    </div>
  `;
}
