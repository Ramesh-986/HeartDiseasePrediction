// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const age = document.querySelector("input[name='age']").value;
        const sex = document.querySelector("input[name='sex']").value;
        const cp = document.querySelector("input[name='cp']").value;
        const trestbps = document.querySelector("input[name='trestbps']").value;
        const chol = document.querySelector("input[name='chol']").value;
        const fbs = document.querySelector("input[name='fbs']").value;
        const restecg = document.querySelector("input[name='restecg']").value;
        const thalach = document.querySelector("input[name='thalach']").value;
        const exang = document.querySelector("input[name='exang']").value;
        const oldpeak = document.querySelector("input[name='oldpeak']").value;
        const slope = document.querySelector("input[name='slope']").value;
        const ca = document.querySelector("input[name='ca']").value;
        const thal = document.querySelector("input[name='thal']").value;

        // Basic validation
        if (age < 0 || age > 120) {
            alert("Please enter a valid age between 0 and 120.");
            event.preventDefault();
            return;
        }

        if (![0, 1].includes(parseInt(sex))) {
            alert("Sex should be 0 (Female) or 1 (Male).");
            event.preventDefault();
            return;
        }

        if (![0, 1, 2, 3].includes(parseInt(cp))) {
            alert("Chest Pain Type should be between 0 and 3.");
            event.preventDefault();
            return;
        }

        if (trestbps < 0 || trestbps > 300) {
            alert("Please enter a valid Resting Blood Pressure.");
            event.preventDefault();
            return;
        }

        if (chol < 0 || chol > 800) {
            alert("Please enter a valid Cholesterol level.");
            event.preventDefault();
            return;
        }

        if (![0, 1].includes(parseInt(fbs))) {
            alert("Fasting Blood Sugar should be 0 (False) or 1 (True).");
            event.preventDefault();
            return;
        }

        if (![0, 1, 2].includes(parseInt(restecg))) {
            alert("Resting ECG Results should be between 0 and 2.");
            event.preventDefault();
            return;
        }

        if (thalach < 0 || thalach > 220) {
            alert("Please enter a valid Maximum Heart Rate Achieved.");
            event.preventDefault();
            return;
        }

        if (![0, 1].includes(parseInt(exang))) {
            alert("Exercise Induced Angina should be 0 (No) or 1 (Yes).");
            event.preventDefault();
            return;
        }

        if (oldpeak < 0 || oldpeak > 10) {
            alert("Please enter a valid Oldpeak value.");
            event.preventDefault();
            return;
        }

        if (![0, 1, 2].includes(parseInt(slope))) {
            alert("Slope should be between 0 and 2.");
            event.preventDefault();
            return;
        }

        if (ca < 0 || ca > 3) {
            alert("Number of Major Vessels should be between 0 and 3.");
            event.preventDefault();
            return;
        }

        if (![3, 6, 7].includes(parseInt(thal))) {
            alert("Thalassemia should be 3 (Normal), 6 (Fixed Defect), or 7 (Reversible Defect).");
            event.preventDefault();
            return;
        }
    });
});

