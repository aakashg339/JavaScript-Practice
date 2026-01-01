function temperatureConverter() {
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('unit').value;
    
    if(Number.isNaN(temp)) {
        document.getElementById('converted').textContent = 'Not a valid number';
        return;
    }
    
    let convertedTemp = unit === 'C' 
    ? (temp * 9/5) + 32 // Convert C to F
    : (temp - 32) * 5/9 // Convert F to C

    document.getElementById('converted').textContent = convertedTemp.toFixed(2);
}

document.getElementById('convert').onclick = temperatureConverter;