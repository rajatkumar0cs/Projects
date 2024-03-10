const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
const section =  document.getElementById("section");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    section.style.backgroundImage = "linear-gradient(to left, #42b883 , white )";
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    section.style.backgroundImage = "linear-gradient(to right, #ff512f , white )";
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    section.style.backgroundImage = this.nonce;
}

