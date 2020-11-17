// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

for (var i = 1; i <= 1700; i++) {

  if  ((i % 3 == 0) && (i % 5 == 0)) {
    document.getElementById("container").innerHTML += "FizzBuzz" + " ";
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    document.getElementById("container").innerHTML += "Fizz" + " ";
    console.log("Fizz");
  } else if (i % 5 == 0) {
    document.getElementById("container").innerHTML += "Buzz" + " ";
    console.log("Buzz");
  } else {
    document.getElementById("container").innerHTML += i + " ";
    console.log(i);
  }
}
