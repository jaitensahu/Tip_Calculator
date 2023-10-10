let input1 = document.querySelector("#input1");
let button = document.getElementById("button");
let input3 = document.querySelector("#input3");
let percentage = document.querySelector("#input2");
let para = document.getElementById("para");
let tipAmountShow = document.getElementById("tipAmountShow");
tipAmountShow.style.display = "none";
button.addEventListener("click", () => {
  let currency = document.getElementById("select1");
  let ans = calculateTip(input1.value, input3.value, percentage.value);
  console.log(ans);
  if (isNaN(ans)) {
    para.innerHTML = "Please Fill Required Field";
  } else {
    para.innerText = currency.value + " " + ans + "  Per person";
  }
  tipAmountShow.style.display = "contents";
});

function calculateTip(amount, noOfPeople, percentage) {
  let totalTip = (amount * percentage) / 100;
  return totalTip / noOfPeople;
}
