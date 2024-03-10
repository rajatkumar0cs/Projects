
function rollDice()
{
    
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImgs");
    const values = [];
    const Images = [];


    for(let i = 0; i< numofDice; i++)
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);    
        Images.push(`<img src="DiceRoller/Img/${value}.png" alt = "Dice${value}"></img>`);  
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImg.innerHTML = Images.join('');

}
