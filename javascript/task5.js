function extractCurrencyValue(price){
    priceStr = price.toString()
    let currency = priceStr.charAt(0)
    let numberChecker = currency.charCodeAt(0)
    if((numberChecker > 57)||(numberChecker < 48)){
        /* 57 in unicode is 9 and 48 is 0*/
        priceStr = priceStr.substring(1)
    }
    return priceStr
}

let number = prompt('Give a value a price (example $120)')

let numberWithoutCurrency = extractCurrencyValue(number)

alert(numberWithoutCurrency)