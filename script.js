function checkAvailability() {
    const dateInput = document.getElementById('date').value;
    const msg = document.getElementById('avail-msg');
    
    if (dateInput) {
        msg.innerText = "✅ AVAILABLE";
        msg.style.color = "#2ecc71";
    } else {
        alert("Please select a pickup date!");
        msg.innerText = "⚠️ PICKUP DATE IS REQUIRED";
        msg.style.color = "#ff4d4d"; 
    }
}

function calculate() {
    const rate = parseFloat(document.getElementById('cameraSelect').value);
    const daysInput = parseInt(document.getElementById('days').value) || 0;
    const insurance = 2300.00;
    const discountRow = document.getElementById('discount-row');
    
    let baseRental = rate * daysInput;
    let discountAmount = 0;

    if (daysInput >= 7) {
        discountAmount = baseRental * 0.15;
        discountRow.style.display = "flex";
    } else {
        discountRow.style.display = "none";
    }

    let rentalAfterDiscount = baseRental - discountAmount;
    const deposit = rentalAfterDiscount * 0.30;
    const finalTotal = rentalAfterDiscount + deposit + insurance;

    const format = (num) => "₹" + num.toLocaleString('en-IN', {minimumFractionDigits: 2});

    document.getElementById('rCost').innerText = format(baseRental);
    document.getElementById('wDiscount').innerText = "-" + format(discountAmount);
    document.getElementById('dDeposit').innerText = format(deposit);
    document.getElementById('totalFee').innerText = format(finalTotal);
}

window.onload = calculate;