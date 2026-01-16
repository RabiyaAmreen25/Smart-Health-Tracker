let waterTotal = 0;
let calorieTotal = 0;

function addWater() {
    let water = Number(document.getElementById("waterInput").value);
    if (water > 0) {
        waterTotal += water;
        document.getElementById("waterTotal").innerText = waterTotal;
        document.getElementById("waterInput").value = "";
    }
}

function addCalories() {
    let calories = Number(document.getElementById("calorieInput").value);
    if (calories > 0) {
        calorieTotal += calories;
        document.getElementById("calorieTotal").innerText = calorieTotal;
        document.getElementById("calorieInput").value = "";
    }
}

function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value) / 100;

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmiResult").innerText = bmi;
    }
}
