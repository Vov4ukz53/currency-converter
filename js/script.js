
let form = document.querySelector(".js-form");
let formInput = document.querySelector(".js-form-input");
let formSelect = document.querySelector(".js-form-select");
let calculatorResult = document.querySelector(".js-calculator-result");
let calculatorChange = document.querySelector(".js-calculator-change");



form.addEventListener("submit", (event) => {
	event.preventDefault();

	let eur = (formInput.value * 0.22).toFixed(2);
	let usd = (formInput.value * 0.25).toFixed(2);
	let gbp = (formInput.value * 0.19).toFixed(2);
	let currency = formSelect.value;

	switch (formSelect.value) {
		case "eur":
			calculatorResult.innerText = `${formInput.value} pln = ${eur} ${currency}`
			calculatorChange.innerText = "0.22 eur";
			break;

		case "usd":
			calculatorResult.innerText = `${formInput.value} pln = ${usd} ${currency}`
			calculatorChange.innerText = "0.25 usd";
			break;

		case "gbp":
			calculatorResult.innerText = `${formInput.value} pln = ${gbp} ${currency}`
			calculatorChange.innerText = "0.19 gbp";
			break;
	}

	
});
