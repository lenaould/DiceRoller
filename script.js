
document.getElementById("submit").onclick = function DiceRoll() {
    const NumDice = document.getElementById("numD").value;  
    const DiceResault = document.getElementById("DResault");
    const DiceImages = document.getElementById("DImage");  
    
    const values = [];
    const Images = [];
 
    for (let i = 0; i < NumDice; i++) {
       const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       Images.push('<img src="Dice/' + value + '.png">');
    }
 

    DiceResault.textContent = "Dice: " + values.join(", ");
    
    DiceImages.innerHTML = Images.join('');
 }
 