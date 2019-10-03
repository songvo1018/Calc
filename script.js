function calculate() {
    // Input
    var sizeRing = parseFloat(document.getElementById('sizeRing').value);
    var thickRing = parseFloat(document.getElementById('thickRing').value);
    var widthRing = parseFloat(document.getElementById('widthRing').value);
    var colorRing = document.getElementById('colorRing').value;
    
    // Calculate
    var firstCoef = (function (sizeRing, thickRing) {
        return (sizeRing + thickRing) * 3.14;
    })(sizeRing, thickRing);
    
    var secondCoef = (function (firstCoef, widthRing) {
        if (widthRing > 6) {
            return (firstCoef + 0.4);
        } else if (widthRing > 4) {
            return (firstCoef + 0.2);
        } else if (widthRing < 4 && widthRing > 2) {
            return firstCoef;
        } else {
            return (firstCoef - 0.3);
        }
    })(firstCoef, widthRing);
    
    var thirdCoef = (function (secondCoef, colorRing) {
        if (colorRing === 'white') {
            return secondCoef + 0.3;
        } else if (colorRing === 'red') {
            return secondCoef;
        } else if (colorRing === 'lemon') {
            return secondCoef - 0.25;
        }
    })(secondCoef, colorRing);
    
    // Output
    document.getElementById('resultSpace').innerHTML += '<br>' + '  ||  RESULT   ' 
        + thirdCoef.toFixed(2) + ' millimetrs  ' + ' (' + colorRing + ')   ||';
    console.log(thirdCoef.toFixed(2));
};

// start function
document.getElementById('btn__ok').addEventListener('click', calculate);
