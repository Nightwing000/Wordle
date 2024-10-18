let wordList = [];
let crct = "";

fetch('words.txt')
    .then(response => response.text())
    .then(data => {
        wordList = data.split('\n').map(word => word.trim().toLowerCase());
        initializeGame();
    })
    .catch(error => console.error('Error loading word list:', error));


function initializeGame() {
    crct = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(crct); 
   
}
let j =0;
function checkword() {
    const guessInput = document.getElementById('g1').value.toLowerCase();

    if (guessInput.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    
    if (wordList.includes(guessInput)) {
            
            var x = document.getElementById("wordgrid").rows[j].cells;
            let count = {}
    
            j++;
            for (let i = 0; i < crct.length; i++) {
                count[crct[i]] = (count[crct[i]] || 0) + 1;
            }
    
           
            for (let i = 0; i < 5; i++) {
                x[i].innerHTML = guessInput[i];  
                 
                if (guessInput[i] === crct[i]) {
                    x[i].classList.add("correct");
                    count[crct[i]]--;  
                }
            }
    
            
            for (let i = 0; i < 5; i++) {
                // Skip already correct letters
                if (!x[i].classList.contains("correct")) {
                    if (crct.includes(guessInput[i]) && count[guessInput[i]] > 0) {
                        x[i].classList.add("exists");
                        count[guessInput[i]]--; 
                    } else {
                        x[i].classList.add("not-there");
                    }
                }  
        }
        
        }

     else {
        alert("Invalid word.");
    }
    
}
