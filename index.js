function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = []; //<= store all the dice rolls
  const images = []; //<= Images of the dice

  //for Loop, since the dice can roll between 1 - 6, randomly
  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="Dice_Images/${value}.png"  alt="Dice ${value}">`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
