//Your API Key: 6fedf31500f5dd1f76740490
//URL: https://v6.exchangerate-api.com/v6/6fedf31500f5dd1f76740490/latest/USD
//currencies: obj.conversion_rates



fetch('https://v6.exchangerate-api.com/v6/6fedf31500f5dd1f76740490/latest/USD')
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Currency not available")
    }
})
.then((obj)=>{
for (key in obj.conversion_rates) {
    document.getElementById('fromCurrency').innerHTML += `<option value="${key}">${key}</option>`;
    document.getElementById('toCurrency').innerHTML += `<option value="${key}">${key}</option>`;
}
let inputCurrency;
let outputCurrency
document.getElementById('fromCurrency').addEventListener('change', function(){
    inputCurrency = this.value;
    console.log(inputCurrency);
})
document.getElementById('toCurrency').addEventListener('change', function(){
    outputCurrency = this.value;
    console.log(outputCurrency);
})
document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    let amountString = document.getElementById('amount').value;
    let amountNr = Number(amountString);
    console.log(amountNr);
    let urlPair = `https://v6.exchangerate-api.com/v6/6fedf31500f5dd1f76740490/pair/${inputCurrency}/${outputCurrency}`
    fetch(urlPair)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("Currency not available")
        }
    })
    .then((obj)=>{
        let rate = obj.conversion_rate;
        let rateNr = Number(rate);
        let convertedAmount = amountNr * rateNr;
        document.getElementById('converted').innerHTML=`<div>${convertedAmount}</div>`
    })
    .catch((err)=>{
        console.log(err);
    })

})
})
.catch((err)=>{
    console.log(err);
})

