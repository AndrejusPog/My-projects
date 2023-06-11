const xxx = document.querySelector("input");
const h1 = document.querySelector("h1");

xxx.addEventListener("input", function (e) {
  h1.innerText ='Welcome, '+ xxx.value;
  if(xxx.value === ''){
    h1.innerText='Enter Your Username'
  }
});
