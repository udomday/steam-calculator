const input = document.querySelector("#gameprice");

async function calcPrice() {
  const response = await fetch("https://www.cbr-xml-daily.ru/latest.js");
  const result = await response.json();
  const inputValue = input.value;

  const KZTPrice =
    inputValue * result.rates.KZT +
    inputValue * result.rates.KZT * 0.025 +
    inputValue * result.rates.KZT * 0.097;

  const answer = KZTPrice / result.rates.KZT;

  document.querySelector("#answer").innerHTML = Math.ceil(answer);
}

input.addEventListener("change", (el) => {
  calcPrice();
});
