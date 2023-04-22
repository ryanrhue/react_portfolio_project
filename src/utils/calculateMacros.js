export function calculateMacros(values) {
    //import all possible inputs
    let { age, sex, feet, inches, centimeters, pounds, kilograms, activity, goal, ratio } = values;
    
    //convert strings to floats
    age = parseFloat(age);
    feet = parseFloat(feet);
    inches = parseFloat(inches);
    centimeters = parseFloat(centimeters);
    pounds = parseFloat(pounds);
    kilograms = parseFloat(kilograms);
    activity = parseFloat(activity);

    //declare formula variables
    let height, weight, ree, tdee, dailyCalories, protein, carb, fat;

    //standardize weight
    if (!kilograms) {
        weight = pounds*0.45359237;
    } else {
        weight = kilograms
    }

    //standardize height
    if (!centimeters) {
        height = ((feet * 12) + inches) * 2.54 ;
    } else {
        height = centimeters;
    }

    //calculate resting energy expenditure based on sex
    if (sex === 'male') {
        ree = (10 * weight) + (6.25 * height) - (5 * age) + 5; 
    } else {
        ree = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    //calculate total daily energy expenditure based on daily activity levels
    tdee = ree * activity;

    //calculate daily calories based on weight goal
    if (goal === 'maintain') {
        dailyCalories = tdee
    } else if (goal === 'leanBulk') {
        dailyCalories = tdee + (tdee * .05)
    } else if (goal === 'massBulk') {
        dailyCalories = tdee + (tdee * .2)
    } else {
        dailyCalories = tdee - (tdee * .2)
    }

    //calculate macro ratio based on preferred diet proportions
    protein = (dailyCalories * .3) / 4;
    if (ratio === 'balanced') {
        fat = (dailyCalories * .35) / 9;
        carb = (dailyCalories * .35) / 4;
    } else if (ratio === 'lowFat') {
        fat = (dailyCalories * .2) / 9;
        carb = (dailyCalories * .5) / 4;
    } else {
        fat = (dailyCalories * .5) / 9;
        carb = (dailyCalories * .2) / 4;
    }

    //return object containing calculated macro values
    let macroTotals = { ree, tdee, weight, height, age, activity, dailyCalories, protein, carb, fat }
    return macroTotals;
};

