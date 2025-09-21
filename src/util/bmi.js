export function calculateBmi({ height, weight }) {
    const bmi = weight / Math.pow(height / 100, 2);
    const status = getBmiStatus(bmi);
    return { bmi: bmi.toFixed(1), status };
}

export function getBmiStatus(bmi) {
    if (bmi <= 18.5) return "Underweight";
    else if (bmi > 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else if (bmi >= 30 && bmi < 34.9) return "Obesity Class I (Moderate)";
    else if (bmi >= 35 && bmi < 39.9) return "Obesity Class II (Severe)";
    else if (bmi >= 40) return "Obesity Class III (Very severe / Morbid)";
    else return "Oops… Something went wrong. Please try again.";
}