function calculate() {
    // Input
    const sizeRing = parseFloat(document.getElementById('sizeRing').value);
    const thickRing = parseFloat(document.getElementById('thickRing').value);
    const widthRing = parseFloat(document.getElementById('widthRing').value);
    const colorRing = document.getElementById('colorRing').value;

    // Calculate
    let sizeCoef = (function (sizeRing, thickRing) {
        if (thickRing > 1.7) {
            return ((sizeRing + thickRing) * 3.14) - 0.4;
        } else {
            return (sizeRing + thickRing) * 3.14;
        }

    })(sizeRing, thickRing);

    let widthCoef = (function (sizeCoef, widthRing) {
        if (widthRing > 6) {
            return (sizeCoef + 0.4);
        } else if (widthRing > 4) {
            return (sizeCoef + 0.2);
        } else if (widthRing < 4 && widthRing > 2) {
            return sizeCoef;
        } else {
            return (sizeCoef - 0.3);
        }
    })(sizeCoef, widthRing);

    let colorCoef = (function (widthCoef, colorRing) {
        if (colorRing === 'white') {
            return widthCoef + 0.3;
        } else if (colorRing === 'red') {
            return widthCoef;
        } else if (colorRing === 'lemon') {
            return widthCoef - 0.25;
        }
    })(widthCoef, colorRing);

    // Output
    document.getElementById('resultSpace').innerHTML += `${'<br></br>'}RESULT => ${colorCoef.toFixed(2)} millimetres (${colorRing}) ||`;
    console.log(colorCoef.toFixed(2));
};
// start function
document.getElementById('btn__ok').addEventListener('click', calculate);
document.querySelector('.btn__ok').addEventListener('click', calculate);
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        calculate();
    }
});
document.getElementById('btn__ok').addEventListener('click', calculate);
