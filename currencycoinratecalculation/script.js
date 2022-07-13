

const el_currency_one = document.getElementById('currency_one');
const el_currency_two = document.getElementById('currency_two');
const el_amount = document.getElementById('amount');
const el_btn_calculate = document.getElementById('btn_calculate');
const el_result = document.getElementById('result');


fetch('./currencies.json')
    .then(res => res.json())
    .then(data => {
        const keys = Object.keys(data);
        const values = Object.values(data);

        let options;

        for (let i = 0; i < keys.length; i++) {
            options += `<option value=${keys[i]}>${values[i]}</option>`;
        }

        el_currency_one.innerHTML += options;
        el_currency_two.innerHTML += options;
    });

el_btn_calculate.addEventListener('click', function() {
    const from_currency = el_currency_one.value;
    const to_currency = el_currency_two.value;
    const amount = el_amount.value;
  
    


    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    

    
        .then(res => res.json())
        .then(res => {  
        const rate = res.rates[to_currency];
        const result=(amount * rate).toFixed(2); 
        el_result.innerText = `${amount} ${from_currency} = ${result} ${to_currency} ` 
    })
});




