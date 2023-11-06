let reverseWord = '';
const textHTML = document.getElementById("palindroma")

function palindromo(word) {
    
    for (let i = word.length - 1; i>=0;  i--) {
        reverseWord += word[i];
    }
    

    if (word == reverseWord) {
        return true
      } else {
        return false
      }
}

const userWord = prompt("Inserisci una parola:", "anna");
let result = palindromo(userWord)
  
if (result) {
    console.log("la parola è palindroma");
    textHTML.innerHTML = `<h1> ${userWord} (è una parola palindroma) </h1>`
    textHTML.classList.add("green")
    textHTML.classList.remove("red")
} else {
    console.log("la parola NON è palindroma");
    textHTML.innerHTML = `<h1> ${userWord} (NON è una parola palindroma) </h1>`
    textHTML.classList.add("red")
    textHTML.classList.remove("green")
}
