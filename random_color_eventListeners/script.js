const button = document.querySelector("button");

const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = "Your new background color code is: " + newColor
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `RGB(${r},${g},${b})`;
};

const allButtons = document.getElementsByClassName("buttons");

for (let button of allButtons) {
  button.addEventListener("click", colorize);
}
function colorize() {
  this.style.backgroundColor = makeRandomColor();
}



for (let i = 1; i < 101; i++) {
    let x = document.createElement("button");
    x.innerHTML = "Button " +`${i}`;
    x.className = "loopButtons"
    const lol = document.querySelector("#container");
    lol.appendChild(x);
    console.log(x);
  }