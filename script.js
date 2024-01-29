const BASE_URL="http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelectorAll("form button");
const formCurr = document.querySelectorAll(".form select");
const toCurr = document.querySelectorAll(".msg");

for(let select of dropdown) {
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected ="selected";
        }else if(select.name === "to" &&  currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
     }
     select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
     });
}
const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal =1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${formCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let respose = await fetch(URL);
    let data = await Response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtValu*rate;
    msg.innerText=`${amtVal} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
};
const updateFlag =(element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = new Src;
};
btn.addEventListener("click", (evt) => {
    evt.prevntDefault();
    updateExchangeRate();
});
window.addEventListener("load",() => {
    updateExchangeRate();
});