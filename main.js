let prices = document.querySelectorAll(".prices")
let toggleBtn = document.getElementById("toggle-btn")

let priceArray = ["$199.99", "$249.99", "$399.99"]

let ogArray = []
prices.forEach(price =>{
    ogArray.push(price.innerHTML)
})
console.log(ogArray)

let clicked = 0

toggleBtn.addEventListener('click', () =>{
    clicked++
    if(clicked % 2 == 1){
        for(let i = 0; i < priceArray.length; i++){
                prices[i].innerHTML = priceArray[i]
        }
    }
    else{
        for(let j = 0; j < ogArray.length; j++)
        prices[j].innerHTML = ogArray[j]
    }
})
