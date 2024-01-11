# JS-BUZZ

## TRACCIA

Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:

Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## RISOLUZIONE

1. Creo un ciclo per contare da 1 a 100
2. PER OGNI iterazione verifico:
   - SE il numero è divisibile per 15
     - stampo "FIZZBUZZ"
   - ALTRIMENTI SE è divisibile per 5
     - stampo BUZZ
   - ALTRIMENTI SE è divisibile per 3
     - stampo Fizz
   - ALTRIMENTI
     - stampo il numero

BONUS 1:

1. PER OGNI iterazione
   - Creo un container
   - Stampo all'interno del container la scritta corretta

BONUS 2:

1. PER OGNI iterazione:
   - PER OGNI iterazione verifico:
     - SE il numero è divisibile per 15
       - stampo "FIZZBUZZ"
     - ALTRIMENTI SE è divisibile per 5
       - stampo BUZZ
     - ALTRIMENTI SE è divisibile per 3
       - stampo Fizz
     - ALTRIMENTI
       - stampo il numero
