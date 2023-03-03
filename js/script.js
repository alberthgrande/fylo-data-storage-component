const slider = document.getElementById("range");
const output = document.querySelectorAll("#output");
const gbLeft = document.querySelector(".gb-left");
const gb = 1000;

slider.addEventListener("input", function () {
  output.forEach((output) => {
    output.innerHTML = this.value;
  });
  gbLeft.innerHTML = gb - this.value;
});
