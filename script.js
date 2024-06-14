const convertButton = document.querySelector(".botao-convert")
const coinsCountry = document.querySelector(".moedas")
const countryConvert = document.querySelector(".moedas-convert")

function convertValues() {

    const inputValor = document.querySelector(".input-valor").value

    const dolarToday = 5.10
    const euroToday = 5.48
    const ieneToday = 0.33
    const libraToday = 6.37
    const realToday = 1.0
    const pesoToday = 0.58


    const convertValue = document.querySelector(".a-converter")
    const convertedValue = document.querySelector(".convertido")

    
    
    // Valores a converter ↓
    
    
    if (countryConvert.value == "1real") {
        convertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor)
    }

    if (countryConvert.value == "1dolar") {
        convertValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor)
    }

    if (countryConvert.value == "1euro") {
        convertValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor)
    }

    if (countryConvert.value == "1iene") {
        convertValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPN"
        }).format(inputValor)
    }

    if (countryConvert.value == "1libra") {
        convertValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor)
    }

    if (countryConvert.value == "1peso") {
        convertValue.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor)
    }

    // Valores Convertidos ↓

   
    if (coinsCountry.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * dolarToday)
    }

    if (coinsCountry.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * euroToday)
    }

    if (coinsCountry.value == "iene") {
        convertedValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPN"
        }).format(inputValor * ieneToday)
    }

    if (coinsCountry.value == "libra") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * libraToday)
    }

    if (coinsCountry.value == "peso") {
        convertedValue.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * pesoToday)
    }
    
    if (coinsCountry.value == "real") {
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * realToday)
    }
}

     // Valores Convertidos ↓

function changeCoins() {
    const nameConverted = document.querySelector(".name-converted")
    const flagConverted = document.querySelector(".flag-coin-converted")

    if (coinsCountry.value == "dolar") {
        nameConverted.innerHTML = "Dólar americano"
        flagConverted.src = "./assets/dolar.png"
    }

    if (coinsCountry.value == "euro") {
        nameConverted.innerHTML = "Euro"
        flagConverted.src = "./assets/euro.png"
    }

    if (coinsCountry.value == "iene") {
        nameConverted.innerHTML = "Iene japonês"
        flagConverted.src = "./assets/iene.png"
    }

    if (coinsCountry.value == "libra") {
        nameConverted.innerHTML = "Libra esterlina"
        flagConverted.src = "./assets/libra.png"
    }

    if (coinsCountry.value == "peso") {
        nameConverted.innerHTML = "Peso argentino"
        flagConverted.src = "./assets/peso.png"
    }

    if (coinsCountry.value == "real") {
        nameConverted.innerHTML = "Real brasileiro"
        flagConverted.src = "./assets/real.png"
    }

    convertValues()
}

    // Valores a converter ↓

function changeConvert() {

    const changeCountry = document.querySelector(".name-convert")
    const changeFlag = document.querySelector(".flag-coin-convert")

    if (countryConvert.value == "1dolar") {
        changeCountry.innerHTML = "Dólar americano"
        changeFlag.src = "./assets/dolar.png"
    }

    if (countryConvert.value == "1euro") {
        changeCountry.innerHTML = "Euro"
        changeFlag.src = "./assets/euro.png"
    }

    if (countryConvert.value == "1iene") {
        changeCountry.innerHTML = "Iene japonês"
        changeFlag.src = "./assets/iene.png"
    }

    if (countryConvert.value == "1libra") {
        changeCountry.innerHTML = "Libra esterlina"
        changeFlag.src = "./assets/libra.png"
    }

    if (countryConvert.value == "1peso") {
        changeCountry.innerHTML = "Peso argentino"
        changeFlag.src = "./assets/peso.png"
    }

    if (countryConvert.value == "1real") {
        changeCountry.innerHTML = "Real brasileiro"
        changeFlag.src = "./assets/real.png"
    }

    convertValues()
}

countryConvert.addEventListener("change", changeConvert)
coinsCountry.addEventListener("change", changeCoins)
convertButton.addEventListener("click", convertValues)