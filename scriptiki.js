

const el_birim_three = document.getElementById('birim_three');
const el_birim_four = document.getElementById('birim_four');
const el_miktar = document.getElementById('miktar');
const el_btn_hesapla = document.getElementById('btn_hesapla');
const el_sonuc = document.getElementById('sonuc');


fetch('./coincurrencies.json')
    .then(res => res.json())
    .then(data => {
        const keys = Object.keys(data);
        const values = Object.values(data);

        let options;

        for (let i = 0; i < keys.length; i++) {
            options += `<option value=${keys[i]}>${values[i]}</option>`;
        }

        el_birim_three.innerHTML += options;
        el_birim_four.innerHTML += options;
    });

el_btn_hesapla.addEventListener('click', function() {
    const from_birim = el_birim_three.value;
    const to_birim = el_birim_four.value;
    const miktar = el_miktar.value;

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${from_birim}&tsyms=${to_birim}`)
        .then(res => res.json())
        .then(res => {  
        const rate = res[to_birim];
        const sonuc=(miktar * rate).toFixed(2); 
        el_sonuc.innerText = `${miktar} ${from_birim} = ${sonuc} ${to_birim} ` 
    })
});




