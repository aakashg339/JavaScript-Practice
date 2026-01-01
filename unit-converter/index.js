const unitConverter = {
    mToFt: (meters) => meters * 3.28084,
    kgToLb: (kilogram) => kilogram * 2.20462,
    cToF: (celcius) => (celcius * 9/5) + 32
};

function unitConverterFn() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversionType').value;
    
    if(Number.isNaN(inputValue)) {
        document.getElementById('convertedValue').textContent = 'Not a valid number';
        return;
    }
    
    let convertedValue = conversionType === "mToFt"
                        ? unitConverter.mToFt(inputValue)
                        : conversionType === "kgToLb" ? unitConverter.kgToLb(inputValue)
                                                    : unitConverter.cToF(inputValue);

    document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);
}

document.getElementById('convert').onclick = unitConverterFn;